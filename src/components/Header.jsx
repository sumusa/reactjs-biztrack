/* eslint-disable react/prop-types */
import { Menu, Search, Bell, User } from "lucide-react";
import { useLocation } from "react-router-dom";
import { pageConfig } from "../config/pageConfig";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const currentPage = pageConfig[location.pathname] || {
    title: "Ecommerce Admin",
    subtitle: "Welcome back",
  };

  return (
    <div className="p-2">
      <header
        className="bg-surface-light dark:bg-surface text-surface-dark dark:text-surface-light 
                        py-4 px-6 flex justify-between items-center rounded-lg shadow-lg"
      >
        <div className="flex items-center space-x-8">
          <button
            className="text-primary hover:text-primary-dark dark:hover:text-primary-light focus:outline-none"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <Menu size={35} />
          </button>
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-bold text-surface-dark dark:text-surface-light">
              {currentPage.title}
            </h1>
            <p className="text-md text-primary dark:text-primary-light">
              {currentPage.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-8 mr-4">
          <div className="flex items-center space-x-8">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-surface/10 dark:bg-surface-light/10 
                          text-surface-dark dark:text-surface-light 
                          placeholder-primary/60 px-4 py-2 pl-10 rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-primary 
                          border border-primary/20"
              />
              <Search
                className="absolute left-3 top-2.5 text-primary/60"
                size={20}
              />
            </div>
            <ThemeSwitcher />
          </div>
          <div className="relative flex items-center">
            <button className="relative text-primary hover:text-primary-dark dark:hover:text-primary-light focus:outline-none">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 bg-secondary text-xs text-surface-light w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
          <button className="text-primary hover:text-primary-dark dark:hover:text-primary-light focus:outline-none">
            <User size={23} />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
