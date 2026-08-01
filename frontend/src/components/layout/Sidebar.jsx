import { NavLink } from "react-router-dom";
import Logo from "../common/Logo";
import { navigationItems } from "../../data/navigation";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Logo />

      <nav className="sidebar-nav">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "sidebar-item active" : "sidebar-item"
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;