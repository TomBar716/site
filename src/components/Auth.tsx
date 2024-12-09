import React from 'react';
import { useStore } from '../lib/store';
import { auth, signInWithGoogle } from '../lib/firebase';

export function Auth() {
  const setUser = useStore((state) => state.setUser);

  const handleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      if (result.user) {
        setUser({
          id: result.user.uid,
          name: result.user.displayName || '',
          email: result.user.email || '',
          role: 'viewer',
          avatarUrl: result.user.photoURL || ''
        });
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome to AI Dev Platform</h2>
        <button
          onClick={handleLogin}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}