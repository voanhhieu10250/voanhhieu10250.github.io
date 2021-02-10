import React from "react";
import { Element } from "react-scroll";

interface Props {
  data: {
    skillmessage: string;
    education: {
      school: string;
      degree: string;
      graduated: string;
      description: string;
    }[];
    work: {
      company: string;
      title: string;
      years: string;
      description: string;
    }[];
    skills: {
      name: string;
      level: string;
    }[];
  };
}

const Resume: React.FC<Props | null> = ({ data }) => {
  const workDetail = () => {
    if (data && !!data.work.length) {
      return data?.work.map((item, index) => (
        <div className="rowItem" key={index}>
          <h3>{item.company}</h3>
          <p>
            {item.title} - <span>Grad: {item.years}</span>
          </p>
          <p
            style={{
              fontStyle: "normal",
              marginTop: 0,
              fontSize: 16,
            }}
          >
            {item.description}
          </p>
        </div>
      ));
    } else
      return (
        <div className="rowItem">
          <p style={{ fontStyle: "normal", marginTop: 0, fontSize: 16 }}>
            Still looking for it ...
          </p>
        </div>
      );
  };

  return (
    <section id="resume">
      <Element name="resume">
        <div className="row education">
          <div className="col-md-3 col-sm-12 pt-2">
            <h1>
              <span>EDUCATION</span>
            </h1>
          </div>
          <div className="col-md-9 col-sm-12">
            {data?.education.map((item, index) => (
              <div className="rowItem" key={index}>
                <h3>{item.school}</h3>
                <p>
                  {item.degree} - <span>Grad: {item.graduated}</span>
                </p>
                <p style={{ fontStyle: "normal", marginTop: 0, fontSize: 16 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="row work">
          <div className="col-md-3 col-sm-12">
            <h1>
              <span>WORK</span>
            </h1>
          </div>
          <div className="col-md-9 col-sm-12">{workDetail()}</div>
        </div>
        <div className="row skills">
          <div className="col-md-3 col-sm-12">
            <h1>
              <span>SKILLS</span>
            </h1>
          </div>
          <div className="col-md-9 col-sm-12">
            <div className="rowItem">
              <p style={{ fontStyle: "normal", marginTop: 0, fontSize: 16 }}>
                {data?.skillmessage}
              </p>
              <ul className="bars">
                {data?.skills.map((item, index) => (
                  <li key={index}>
                    <p>{item.name}</p>
                    <span style={{ width: item.level }}></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Resume;
