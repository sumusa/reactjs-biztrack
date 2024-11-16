import { useState, useRef, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const themes = [
    { name: "light", icon: Sun },
    { name: "dark", icon: Moon },
    { name: "system", icon: Monitor },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary hover:text-primary-dark dark:hover:text-primary-light focus:outline-none p-2 rounded-lg"
      >
        {theme === "dark" ? <Moon size={22} /> : <Sun size={22} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-surface-light dark:bg-surface border border-primary/20">
          <div className="py-2">
            {themes.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => {
                  toggleTheme(name);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left flex items-center space-x-2 hover:bg-primary/10
                  ${
                    theme === name
                      ? "text-primary dark:text-primary-light"
                      : "text-surface-dark dark:text-surface-light"
                  }`}
              >
                <Icon size={18} />
                <span className="capitalize">{name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
