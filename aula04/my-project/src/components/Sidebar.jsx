import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`fixed inset-0 bg-black  bg-opacity-50 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={closeSidebar}
    >
      <div
      
        className={`sm:w-12 md:w-72 transition-all mt-1 rounded-r-lg bg-zinc-300 dark:bg-zinc-100 p-4 fixed top-0 left-0 h-full `}
        > 
        <button onClick={closeSidebar} className="absolute top-2 right-2 text-xl bg-slate-100 w-8 h-8 rounded-md text-slate-800 hover:bg-slate-400">x</button>
        <ul className="mt-10">
          <li>
            <Link to="/" className="block text-green-500 p-3 hover:bg-blue-400 hover:text-white transition-all" onClick={closeSidebar}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="block text-blue-600 p-3 hover:bg-blue-400 hover:text-white transition-all" onClick={closeSidebar}>About</Link>
          </li>
          <li>
            <Link to="/contact" className="block text-blue-600 p-3 hover:bg-blue-400 hover:text-white transition-all" onClick={closeSidebar}>Contact</Link>
          </li>
          <li>
            <Link to="/register" className="block text-blue-600 p-3 hover:bg-blue-400 hover:text-white transition-all" onClick={closeSidebar}>Registrar-se</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
