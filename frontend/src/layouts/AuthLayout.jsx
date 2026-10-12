import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from '../components/ui/Toast';

export const AuthLayout = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--background)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1.25rem, 4vw, 2.5rem) clamp(0.75rem, 3vw, 1.5rem)',
        position: 'relative',
        boxSizing: 'border-box',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <main style={{ width: '100%', maxWidth: '580px', display: 'flex', justifyContent: 'center' }}>
        <Outlet />
      </main>

      <ToastContainer />
    </div>
  );
};
