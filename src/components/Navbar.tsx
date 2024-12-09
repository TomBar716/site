import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Users, Settings, LogOut } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-red-500" />
            <span className="text-white font-bold text-xl">AI Dev Platform</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Team
            </Link>
            <div className="flex items-center space-x-2">
              <button className="text-gray-300 hover:text-white p-2 rounded-full">
                <Settings className="w-5 h-5" />
              </button>
              <button className="text-gray-300 hover:text-white p-2 rounded-full">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}