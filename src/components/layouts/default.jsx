import React from 'react';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">My Bare-Bones App</h1>
      </header>
      <main className="flex flex-1 justify-center items-center p-4">
        <Outlet />
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2023 My Bare-Bones App</p>
      </footer>
    </div>
  );
}

export default SharedLayout;