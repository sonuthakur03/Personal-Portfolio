import { Link, NavLink } from "react-router-dom";

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
