import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

interface Props {
  data: string[] | null;
}

const Navbar: React.FC<Props> = ({ data }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  console.log("object");
  useEffect(() => {
    const scrolling = () => {
      if (window.scrollY > window.screen.availHeight / 2) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", scrolling);
    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  const renderMenu = (data: string[] | null): JSX.Element[] => {
    if (data)
      return data.map((item, index) => {
        return (
          <li className="nav-item" key={index}>
            <ScrollLink
              activeClass="activeClass"
              className="nav-link px-3 nav-btn"
              to={item.toLocaleLowerCase()}
              spy={true}
              smooth={true}
              offset={index === data.length - 1 ? -380 : -90}
              duration={100}
            >
              {item}
            </ScrollLink>
          </li>
        );
      });
    else return [];
  };

  return (
    <nav
      id="nav-wrap"
      className={`navbar navbar-expand-lg${scrolled ? " bgChange" : ""}`}
    >
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
