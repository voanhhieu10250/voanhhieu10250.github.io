import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

type Data = Array<{
  title: string;
  menu: [{ name: string; id: string }];
}> | null;

const Navbar: React.FC<{ data: Data }> = ({ data }) => {
  const renderSubMenu = (
    data: { name: string; id: string }[]
  ): JSX.Element[] => {
    return data.map((item, index) => {
      return (
        <li key={index}>
          <Link className="dropdown-item dropdown_link" to={item.id}>
            {item.name}
          </Link>
        </li>
      );
    });
  };

  const renderMenu = (data: Data): JSX.Element[] => {
    if (data)
      return data.map((item, index) => {
        return (
          <li
            className={`nav-item${!!item.menu.length ? " dropdown" : ""}`}
            key={index}
          >
            {!!item.menu.length ? (
              <>
                <a
                  className="nav-link dropdown-toggle px-3 nav-btn"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {item.title}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {renderSubMenu(item.menu)}
                </ul>
              </>
            ) : (
              <ScrollLink
                activeClass="activeClass"
                className="nav-link px-3 nav-btn"
                to={item.title.toLocaleLowerCase()}
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
              >
                {item.title}
              </ScrollLink>
            )}
          </li>
        );
      });
    else return [];
  };

  return (
    <nav id="nav-wrap" className="navbar navbar-expand-lg bgChange">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">{renderMenu(data)}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
