import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Notes from "./pages/Notes";
import Expenses from "./pages/Expenses";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 1024);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex min-h-screen bg-surface-light dark:bg-surface transition-colors duration-15">
          <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          <div
            className={`flex-1 ${
              isCollapsed ? "pl-0 lg:pl-20" : "pl-0 lg:pl-56"
            } bg-surface`}
          >
            <div className="p-2">
              <Header
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
              />
              <div className="bg-surface-light dark:bg-surface rounded-lg shadow-xl m-2 mt-2">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/notes" element={<Notes />} />
                  <Route path="/expenses" element={<Expenses />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
