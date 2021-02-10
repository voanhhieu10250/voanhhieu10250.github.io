import React from "react";
import { Element } from "react-scroll";
import publicURL from "../../../helper/publicUrl";

interface Props {
  name: string;
  resumedownload: string;
  bio: string;
  contactmessage: string;
  email: string;
  phone: string;
  address: {
    city: string;
    country: string;
    zip: string;
  };
}

const About: React.FC<{ data: Props | null }> = ({ data }) => {
  return (
    <section id="about">
      <Element name="about">
        <div className="row">
          <div className="col-3 d-none d-md-block">
            <img
              src={publicURL("profile-pic.jpg")}
              alt="profile picture"
              className="avatar"
            />
          </div>
          <div className="col-sm-12 col-md-9">
            <h2>About Me</h2>
            <p>{data?.bio}</p>
            <div className="row m-0">
              <div className="col-sm-12 col-md-5 p-0">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{data?.name}</span>
                  <br />
                  <span>{data?.address.country}</span>
                  <br />
                  <span>
                    {data?.address.city},{data?.address.zip}
                  </span>
                  <br />
                  <span>{data?.phone}</span>
                  <br />
                  <span>{data?.email}</span>
                </p>
              </div>
              <div className="col-sm-12 col-md-7 p-0">
                <a
                  className="btn downloadBtn"
                  href={`${process.env.PUBLIC_URL}/Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-download"></i>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default About;
