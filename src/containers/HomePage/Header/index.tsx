import React from "react";
import { Element } from "react-scroll";
import bgImage from "../../../images/header-background.jpg";

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
  } | null;
}

const Header: React.FC<Props> = ({ data }) => {
  return (
    <Element
      name="home"
      id="home"
      style={{ backgroundImage: `url(${bgImage})` }}
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
    </Element>
  );
};

export default Header;
