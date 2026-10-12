import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from '../components/ui/Toast';

export const AuthLayout = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        height: '100vh',
        backgroundColor: 'var(--background)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem 1rem',
        position: 'relative',
        boxSizing: 'border-box',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      <main style={{ width: '100%', maxWidth: '480px', display: 'flex', justifyContent: 'center' }}>
        <Outlet />
      </main>

      <ToastContainer />
    </div>
  );
};
