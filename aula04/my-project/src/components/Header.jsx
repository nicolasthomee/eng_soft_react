import React from 'react';
import ThemeToggle from './Toogle';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-blue-600 text-6xl p-4 h-16 flex justify-between items-center">
      <button onClick={toggleSidebar} className="text-white absolute top-1 left-1 text-2xl">
        ☰
      </button>
      <h1 className="text-white text-bold pl-10 flex hover:text-sm">Desenvolvimento Aplicativo em React + tailWind</h1>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <button
          className="bg-white text-blue-600 px-4 py-2 rounded-xl hover:bg-gray-200"
          onClick={() => window.location.href = '/Login'}
        >
          Login
        </button>
        <img
          src="/profile-icon.png"
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer"
          onClick={() => window.location.href = '/Contact'}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png';
          }}
        />
      </div>
    </header>
  );
};

export default Header;
