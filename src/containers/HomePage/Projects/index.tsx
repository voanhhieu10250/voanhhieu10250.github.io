import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import publicURL from "../../../helper/publicUrl";

interface Props {
  data: {
    title: string;
    image: string;
    id: string;
  }[];
  bonusInfo: string[];
}

const Projects: React.FC<Props | null> = ({ data, bonusInfo }) => {
  return (
    <section id="projects">
      <Element name="project">
        <div className="list_project">
          <h1>Check Out Some of My Projects.</h1>
          <div className="d-flex flex-wrap wrapper">
            {data?.map((item, index) => (
              <div className="project_item" key={index}>
                <div className="item">
                  <Link to={`/detail/${item.id}`} title={item.title}>
                    <img src={publicURL(item.image)} alt={item.title} />
                    <div className="overlay">
                      <h5>{item.title}</h5>
                      <div className="link_icon">
                        <i className="fas fa-link"></i>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="bonusInfo"
          style={{
            backgroundImage: `linear-gradient(0deg, #000000bd 0%,#000000bd 10%), url(${publicURL(
              "patrick-hendry.jpg"
            )})`,
          }}
        >
          <div className="blur"></div>
          <div className="text_container">
            <div className="row text_row">
              <div className="d-md-block d-none col-md-2 quote_icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <div className="col-md-10 col-sm-12">
                {bonusInfo?.map((item, index) => (
                  <Fragment key={index}>
                    <p>{item}</p>
                    <br />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Projects;
