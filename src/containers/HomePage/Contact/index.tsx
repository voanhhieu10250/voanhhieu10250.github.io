import React, { useContext } from "react";
import { Element } from "react-scroll";
import { ScreenContext } from "../../../App";

interface Props {
  data: {
    email: string;
    linkedin: string;
    fb: string;
    twitter: string;
    instag: string;
  };
}

const Contact: React.FC<Props | null> = ({ data }) => {
  const phoneScreen = useContext(ScreenContext);
  return (
    <section id="contact">
      <Element name="contact">
        <div className="row">
          <div className="col-md-2 col-sm-12 section_head">
            <i className="fas fa-envelope d-md-block d-none"></i>
            <p className={`d-md-none${phoneScreen ? " d-none" : " d-block"}`}>
              Get in touch
            </p>
          </div>
          <div className="col-md-10 col-sm-12">
            <p className="description">
              Please contact me through these social networks
            </p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <i className="far fa-envelope"></i>
          </div>
          <div className="col-md-10 col-sm-12">
            <a href={data?.email} className="contact_link">
              {data?.email.slice(data.email.indexOf(":") + 1)}
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <i className="fab fa-facebook-square"></i>
          </div>
          <div className="col-md-10 col-sm-12">
            <a
              href={data?.fb}
              target="_blank"
              rel="noopener noreferrer"
              className="contact_link"
            >
              {data?.fb}
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <i className="fab fa-linkedin"></i>
          </div>
          <div className="col-md-10 col-sm-12">
            <a
              href={data?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact_link"
            >
              {data?.linkedin}
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="col-md-10 col-sm-12">
            <a
              href={data?.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="contact_link"
            >
              {data?.twitter}
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-sm-12">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="col-md-10 col-sm-12">
            <a
              href={data?.instag}
              target="_blank"
              rel="noopener noreferrer"
              className="contact_link"
            >
              {data?.instag}
            </a>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Contact;
