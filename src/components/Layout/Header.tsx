// Header.tsx
import { Link, NavLink } from "react-router-dom";

// The Header component defines the navigation bar for the application, including links to different pages such as Home, Projects, Skills, About, and Contact. It also includes a placeholder for a dark mode toggle and a resume button. The NavLink component is used to apply active styles to the currently active link, enhancing the user experience by indicating which page is currently being viewed.
const Header = () => {
  const navbarItems: { name: string; to: string }[] = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Projects",
      to: "/projects",
    },
    {
      name: "Skills",
      to: "/skills",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  const navbarItemsJSX = navbarItems.map((item) => {
    return (
      <li key={item.name}>
        <NavLink to={item.to} end={item.name === "Home"}>
          {item.name}
        </NavLink>
      </li>
    );
  });
  return (
    <header>
      <h1>
        <Link to="/">SONU.DEV</Link>{" "}
      </h1>

      <nav>
        <ul>{navbarItemsJSX}</ul>
      </nav>

      <div>
        <span>darkmode</span>
        <button>Resume</button>
      </div>
    </header>
  );
};

export default Header;
