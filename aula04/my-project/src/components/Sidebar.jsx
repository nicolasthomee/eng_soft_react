import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={closeSidebar}
    >
      <div
        className={`sm:w-12 md:w-72 mt-6 transition-all rounded-r-xl bg-blue-950 dark:bg-slate-100 p-4 fixed top-0 left-0`}
        style={{ height: 'auto' }}
      >
        <button onClick={closeSidebar} className="absolute top-2 right-2 text-xl bg-slate-100 w-8 h-8 rounded-md text-slate-800 hover:bg-slate-400">x</button>
        <ul className="mt-10">
          <li>
            <Link to="/" className="block text-blue-800 p-3 hover:bg-blue-500 hover:rounded-xl hover:text-white transition-all" onClick={closeSidebar}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="block text-blue-800 p-3 hover:bg-blue-500 hover:rounded-xl hover:text-white transition-all" onClick={closeSidebar}>Produtos</Link>
          </li>
          <li>
            <Link to="/clima" className="block text-blue-800 p-3 hover:bg-blue-500 hover:rounded-xl hover:text-white transition-all" onClick={closeSidebar}>Clima</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
