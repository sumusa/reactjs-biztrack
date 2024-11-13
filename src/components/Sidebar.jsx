/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  ShoppingCart,
  Package,
  Users,
  Settings,
  LogOut,
  Clipboard,
  Wallet,
  HelpCircle,
  Mail,
  X,
} from "lucide-react";
import Logo from "./Logo";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          !isCollapsed
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCollapsed(true)}
      />

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white h-screen transition-all duration-300 fixed left-0 top-0 flex flex-col
          ${
            isCollapsed
              ? "w-0 lg:w-20 -translate-x-full lg:translate-x-0"
              : "w-64 translate-x-0"
          }
          z-50 lg:z-auto p-6`}
      >
        {/* Close button for mobile */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white lg:hidden"
          onClick={() => setIsCollapsed(true)}
        >
          <X size={24} />
        </button>

        <div className="flex items-center justify-center mb-6">
          {isCollapsed ? (
            <Logo className="w-8 h-8 text-blue-400" />
          ) : (
            <div className="flex items-center space-x-2">
              <Logo className="w-8 h-8 text-blue-400" />
              <h2 className="text-2xl font-bold">Maya Inc.</h2>
            </div>
          )}
        </div>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                } transition-all duration-300 hover:bg-gray-700 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${isActive("/") ? "bg-gray-700 text-blue-400" : ""}`}
              >
                <Home size={18} className="flex-shrink-0" />
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "hidden" : "block"
                  }`}
                >
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                } transition-all duration-300 hover:bg-gray-700 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${isActive("/products") ? "bg-gray-700 text-blue-400" : ""}`}
              >
                <ShoppingCart size={18} className="flex-shrink-0" />
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "hidden" : "block"
                  }`}
                >
                  Products
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                } transition-all duration-300 hover:bg-gray-700 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${isActive("/orders") ? "bg-gray-700 text-blue-400" : ""}`}
              >
                <Package size={18} className="flex-shrink-0" />
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "hidden" : "block"
                  }`}
                >
                  Orders
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/customers"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                } transition-all duration-300 hover:bg-gray-700 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${isActive("/customers") ? "bg-gray-700 text-blue-400" : ""}`}
              >
                <Users size={18} className="flex-shrink-0" />
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "hidden" : "block"
                  }`}
                >
                  Customers
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/notes"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                } transition-all duration-300 hover:bg-gray-700 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${isActive("/notes") ? "bg-gray-700 text-blue-400" : ""}`}
              >
                <Clipboard size={18} className="flex-shrink-0" />
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "hidden" : "block"
                  }`}
                >
                  Notes
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/expenses"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                } transition-all duration-300 hover:bg-gray-700 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${isActive("/expenses") ? "bg-gray-700 text-blue-400" : ""}`}
              >
                <Wallet size={18} className="flex-shrink-0" />
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "hidden" : "block"
                  }`}
                >
                  Expenses
                </span>
              </Link>
            </li>
            <div className="mt-16 mb-4 border-t border-gray-700" />
            {!isCollapsed && (
              <div className="px-2 mb-4 text-xs text-gray-400 uppercase">
                Support & Settings
              </div>
            )}

            <li>
              <Link
                to="/help"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                } transition-all duration-300 hover:bg-gray-700 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${isActive("/help") ? "bg-gray-700 text-blue-400" : ""}`}
              >
                <HelpCircle size={18} className="flex-shrink-0" />
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "hidden" : "block"
                  }`}
                >
                  Help
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                } transition-all duration-300 hover:bg-gray-700 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${isActive("/contact") ? "bg-gray-700 text-blue-400" : ""}`}
              >
                <Mail size={18} className="flex-shrink-0" />
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "hidden" : "block"
                  }`}
                >
                  Contact
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                } transition-all duration-300 hover:bg-gray-700 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${isActive("/settings") ? "bg-gray-700 text-blue-400" : ""}`}
              >
                <Settings size={18} className="flex-shrink-0" />
                <span
                  className={`transition-all duration-300 ${
                    isCollapsed ? "hidden" : "block"
                  }`}
                >
                  Settings
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="pt-6 border-t border-gray-700">
          <Link
            to="/logout"
            className={`flex items-center ${
              isCollapsed ? "" : "space-x-4"
            } transition-all duration-300 hover:bg-gray-700 p-2 rounded text-lg ${
              isCollapsed ? "justify-center" : "justify-start"
            }`}
          >
            <LogOut size={18} className="flex-shrink-0" />
            <span
              className={`transition-all duration-300 ${
                isCollapsed ? "hidden" : "block"
              }`}
            >
              Logout
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
