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
        className={`bg-surface-dark text-surface h-screen fixed left-0 top-0 flex flex-col
          ${
            isCollapsed
              ? "w-0 lg:w-20 -translate-x-full lg:translate-x-0"
              : "w-56 translate-x-0"
          }
          z-50 lg:z-auto p-6`}
      >
        {/* Close button for mobile */}
        <button
          className="absolute top-4 right-4 text-primary-light hover:text-surface lg:hidden"
          onClick={() => setIsCollapsed(true)}
        >
          <X size={24} />
        </button>

        <div className="flex items-center justify-center mb-6">
          {isCollapsed ? (
            <Logo className="w-8 h-8 text-primary" />
          ) : (
            <div className="flex items-center space-x-4">
              <Logo className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-surface-light">
                Maya Inc.
              </h2>
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
                } hover:bg-primary/25 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${
                  isActive("/")
                    ? "bg-black/20 text-primary"
                    : "text-surface-light"
                } transition-all duration-150`}
              >
                <div className="flex items-center space-x-4">
                  <Home size={18} className="flex-shrink-0" />
                  <span className={`${isCollapsed ? "hidden" : "block"}`}>
                    Dashboard
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                } hover:bg-primary/25 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${
                  isActive("/products")
                    ? "bg-black/20 text-primary"
                    : "text-surface-light"
                } transition-all duration-150`}
              >
                <div className="flex items-center space-x-4">
                  <ShoppingCart size={18} className="flex-shrink-0" />
                  <span className={` ${isCollapsed ? "hidden" : "block"}`}>
                    Products
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                }  hover:bg-primary/25 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${
                  isActive("/orders")
                    ? "bg-black/20 text-primary"
                    : "text-surface-light"
                } transition-all duration-150`}
              >
                <div className="flex items-center space-x-4">
                  <Package size={18} className="flex-shrink-0" />
                  <span className={` ${isCollapsed ? "hidden" : "block"}`}>
                    Orders
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/customers"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                }  hover:bg-primary/25 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${
                  isActive("/customers")
                    ? "bg-black/20 text-primary"
                    : "text-surface-light"
                } transition-all duration-150`}
              >
                <div className="flex items-center space-x-4">
                  <Users size={18} className="flex-shrink-0" />
                  <span className={` ${isCollapsed ? "hidden" : "block"}`}>
                    Customers
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/notes"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                }  hover:bg-primary/25 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${
                  isActive("/notes")
                    ? "bg-black/20 text-primary"
                    : "text-surface-light"
                } transition-all duration-150`}
              >
                <div className="flex items-center space-x-4">
                  <Clipboard size={18} className="flex-shrink-0" />
                  <span className={` ${isCollapsed ? "hidden" : "block"}`}>
                    Notes
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/expenses"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                }  hover:bg-primary/25 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${
                  isActive("/expenses")
                    ? "bg-black/20 text-primary"
                    : "text-surface-light"
                } transition-all duration-150`}
              >
                <div className="flex items-center space-x-4">
                  <Wallet size={18} className="flex-shrink-0" />
                  <span className={` ${isCollapsed ? "hidden" : "block"}`}>
                    Expenses
                  </span>
                </div>
              </Link>
            </li>
            <div className="mt-16 mb-4 border-t border-black/20" />
            {!isCollapsed && (
              <div className="px-2 mb-4 text-xs text-primary-light uppercase">
                Support & Settings
              </div>
            )}

            <li>
              <Link
                to="/help"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                }  hover:bg-primary/25 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${
                  isActive("/help")
                    ? "bg-black/20 text-primary"
                    : "text-surface-light"
                } transition-all duration-150`}
              >
                <div className="flex items-center space-x-4">
                  <HelpCircle size={18} className="flex-shrink-0" />
                  <span className={` ${isCollapsed ? "hidden" : "block"}`}>
                    Help
                  </span>
                </div>
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                }  hover:bg-primary/25 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${
                  isActive("/contact")
                    ? "bg-black/20 text-primary"
                    : "text-surface-light"
                } transition-all duration-150`}
              >
                <div className="flex items-center space-x-4">
                  <Mail size={18} className="flex-shrink-0" />
                  <span className={` ${isCollapsed ? "hidden" : "block"}`}>
                    Contact
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className={`flex items-center ${
                  isCollapsed ? "" : "space-x-4"
                }  hover:bg-primary/25 p-2 rounded text-lg ${
                  isCollapsed ? "justify-center" : "justify-start"
                } ${
                  isActive("/settings")
                    ? "bg-black/20 text-primary"
                    : "text-surface-light"
                } transition-all duration-150`}
              >
                <div className="flex items-center space-x-4">
                  <Settings size={18} className="flex-shrink-0" />
                  <span className={` ${isCollapsed ? "hidden" : "block"}`}>
                    Settings
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="pt-6 border-t border-black/20">
          <Link
            to="/logout"
            className={`flex items-center ${
              isCollapsed ? "" : "space-x-4"
            }  hover:bg-primary/25 p-2 rounded text-lg ${
              isCollapsed ? "justify-center" : "justify-start"
            } ${
              isActive("/logout")
                ? "bg-black/20 text-primary"
                : "text-surface-light"
            } transition-all duration-150`}
          >
            <div className="flex items-center space-x-4">
              <LogOut size={18} className="flex-shrink-0" />
              <span className={` ${isCollapsed ? "hidden" : "block"}`}>
                Logout
              </span>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
