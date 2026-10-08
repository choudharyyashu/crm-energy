const crypto = require('crypto');
const prisma = require('../config/prisma');

const ENCRYPTION_SECRET = process.env.JWT_SECRET || 'crm_ebox_master_encryption_key_2026';
const ALGORITHM = 'aes-256-cbc';
const KEY = crypto.createHash('sha256').update(ENCRYPTION_SECRET).digest();

const encryptText = (text) => {
  try {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${iv.toString('hex')}:${encrypted}`;
  } catch (_) {
    return Buffer.from(text).toString('base64');
  }
};

const decryptText = (cipherText) => {
  try {
    if (!cipherText) return '';
    if (!cipherText.includes(':')) {
      return Buffer.from(cipherText, 'base64').toString('utf8');
    }
    const [ivHex, encrypted] = cipherText.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (_) {
    return cipherText;
  }
};

class EboxService {
  async getMessages(tenantId) {
    const messages = await prisma.eboxMessage.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
    });

    return messages.map((m) => ({
      ...m,
      message: m.isEncrypted ? decryptText(m.message) : m.message,
    }));
  }

  async sendMessage(tenantId, userId, data) {
    if (!data.subject || !data.message) {
      const err = new Error('Subject and message content are required.');
      err.statusCode = 400;
      throw err;
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true },
    });

    const encryptedMessage = encryptText(data.message.trim());

    const saved = await prisma.eboxMessage.create({
      data: {
        tenantId,
        senderId: userId,
        senderName: user?.name || 'Super Executive Admin',
        recipient: data.recipient || 'Kiaan Tech Team',
        subject: data.subject.trim(),
        message: encryptedMessage,
        priority: data.priority || 'Normal',
        isEncrypted: true,
      },
    });

    return {
      ...saved,
      message: data.message.trim(),
    };
  }
}

module.exports = new EboxService();
