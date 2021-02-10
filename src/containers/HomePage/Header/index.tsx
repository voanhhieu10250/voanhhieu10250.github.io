import React from "react";
import { Element } from "react-scroll";
import publicURL from "../../../helper/publicUrl";

interface Social {
  name: string;
  url: string;
  className: string;
}

interface Props {
  data: {
    name: string;
    description: string;
    social: Social[];
  };
}

const Header: React.FC<Props | null> = ({ data }) => {
  return (
    <main>
      <Element
        name="home"
        id="home"
        style={{
          backgroundImage: `url(${publicURL("header-background.jpg")})`,
        }}
      >
        <div className="row banner">
          <div className="col banner_wrapper">
            <p className="title">I'm {data?.name}</p>
            <p className="description">{data?.description}</p>
            <div className="socialBox">
              {data?.social.map((item, index) => {
                return (
                  <a
                    className="link"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    <i className={item.className}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <button
          className="btn scrollDownBtn"
          onClick={() => {
            window.scrollTo(0, window.screen.availHeight - 140);
          }}
        >
          <i className="fas fa-chevron-circle-down"></i>
        </button>
      </Element>
    </main>
  );
};

export default Header;
