import { NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Home", end: true, target: "_self" },
  { to: "/selected-comics", label: "Selected Comics", target: "_self" },
  { to: "/coding-comics", label: "Coding Comics", target: "_self" },
  { to: "/palestine-comics", label: "Palestine Comics", target: "_self" },
  { to: "/books", label: "Books", target: "_self" },
  { to: "https://microbusstore.com/collections/microbus-nasser", label: "Shop", target: "_blank" },
] as const;

export function Navigation() {
  return (
    <nav className="portfolio-nav" aria-label="Main">
      <ul className="portfolio-nav-list">
        {navItems.map(({ to, label, target, ...item }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={"end" in item ? item.end : false}
              target={target}
              className={({ isActive }) =>
                isActive ? "portfolio-nav-link is-active" : "portfolio-nav-link"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
