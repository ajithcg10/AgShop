import { NavLink, useNavigate } from "react-router-dom";
import { useConfig } from "../context/ConfigContext";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const Navbar = () => {
  const { appName, nav } = useConfig();
  const { themeName, toggleTheme } = useTheme();
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="cfg-navbar">
      <div className="cfg-navbar__inner flex items-center justify-between">

        {/* Logo */}
        <span className="cfg-navbar__brand"  onClick={()=>navigate("/")} >{appName}</span>

        {/* Desktop Menu */}
        <nav className=" hidden md:flex gap-6 cfg-navbar__links">
          {nav.map((item: any) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `cfg-navbar__link ${isActive ? "cfg-navbar__link--active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button className="cfg-btn cfg-btn--ghost" onClick={toggleTheme}>
            {themeName === "light" ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 p-4">
          {nav.map((item: any) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `cfg-navbar__link ${isActive ? "cfg-navbar__link--active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;