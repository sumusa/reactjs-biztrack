/* eslint-disable react/prop-types */
import { Menu, Search, Bell, User } from "lucide-react";

const Header = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <button
          className="text-gray-400 hover:text-white focus:outline-none"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu size={24} />
        </button>
        <h1 className="text-2xl font-bold">Ecommerce Admin</h1>
      </div>

      <div className="flex-1 max-w-xl mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      <div className="flex items-center space-x-8 mr-4">
        <div className="relative flex items-center">
          <button className="relative text-gray-400 hover:text-white focus:outline-none">
            <Bell size={22} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>
        <button className="text-gray-400 hover:text-white focus:outline-none">
          <User size={23} />
        </button>
      </div>
    </header>
  );
};

export default Header;
