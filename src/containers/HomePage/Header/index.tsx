import { bottom } from "@popperjs/core";
import React, { useContext } from "react";
import { Element } from "react-scroll";
import { ScreenContext } from "../../../App";
import publicURL from "../../../helper/publicUrl";

interface Social {
  name: string;
  url: string;
  className: string;
}

interface Props {
  data: {
    picture: string;
    name: string;
    description: string[];
    social: Social[];
  };
}

const Header: React.FC<Props | null> = ({ data }) => {
  const phoneScreen = useContext(ScreenContext);

  return (
    <main>
      <Element
        name="home"
        id="home"
        style={
          !phoneScreen
            ? {
                backgroundImage: `linear-gradient(0deg,#000, rgba(0, 0, 0, 0.74) ),url(${publicURL(
                  "header-background.jpg"
                )})`,
              }
            : { backgroundColor: "transparent", height: "max-content" }
        }
      >
        <div
          className="row banner text-md-start text-center"
          style={
            phoneScreen
              ? {
                  position: "unset",
                  transform: "unset",
                  width: "100%",
                  margin: 0,
                  marginBlock: 40,
                }
              : {}
          }
        >
          <div className="d-lg-block d-none col-3">
            <img src={publicURL(data?.picture)} alt="picture of me" />
          </div>
          <div className="col-lg-9 col-sm-12 banner_wrapper">
            {phoneScreen ? (
              <img
                src={publicURL(data?.picture)}
                style={{ margin: 0, marginBottom: 10 }}
                alt="picture of me"
              />
            ) : (
              <p className="title">{data?.name}</p>
            )}
            {data?.description.map((item, index) => (
              <>
                <p
                  className={`description${
                    phoneScreen && index !== 0 ? " text-start" : ""
                  }`}
                  key={index}
                >
                  {item}
                </p>
                {phoneScreen && index === 0 ? <br /> : ""}
              </>
            ))}
            <br />
            <p className="description">Feel free to look around!</p>
            <div className="socialBox justify-content-md-start justify-content-center">
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
          hidden={phoneScreen}
          className="btn scrollDownBtn"
          onClick={() => {
            window.scrollTo(
              0,
              window.screen.availHeight > 770
                ? 730
                : window.screen.availHeight - 140
            );
          }}
        >
          <i className="fas fa-chevron-circle-down"></i>
        </button>
      </Element>
    </main>
  );
};

export default Header;
