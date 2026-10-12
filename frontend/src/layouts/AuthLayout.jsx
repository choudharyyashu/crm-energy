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
        padding: 'clamp(1rem, 2.5vw, 1.75rem) clamp(0.75rem, 2vw, 1.25rem)',
        position: 'relative',
        boxSizing: 'border-box',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <main style={{ width: '100%', maxWidth: '460px', display: 'flex', justifyContent: 'center' }}>
        <Outlet />
      </main>

      <ToastContainer />
    </div>
  );
};
