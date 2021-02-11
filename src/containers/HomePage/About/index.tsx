import React from "react";
import { Element } from "react-scroll";

interface Props {
  resumedownload: string;
  name: string;
  bio: string[];
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
          <div className="col-md-8 col-sm-12">
            <h2>About Me</h2>
            {data?.bio.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="row m-0">
              <div className="col-12 p-0">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{data?.name}</span>
                  <br />
                  <span>{data?.address.country}</span>
                  <br />
                  <span>
                    {data?.address.city}, {data?.address.zip}
                  </span>
                  <br />
                  <span>{data?.phone}</span>
                  <br />
                  <span>{data?.email}</span>
                </p>
              </div>
              <div className="col-12 p-0">
                <a
                  className="btn downloadBtn"
                  href={data?.resumedownload}
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
