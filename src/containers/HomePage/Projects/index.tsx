import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import { ScreenContext } from "../../../App";
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
  const phoneScreen = useContext(ScreenContext);

  return (
    <section id="projects">
      <Element name="project">
        <div
          className="list_project"
          style={phoneScreen ? { paddingInline: 0 } : {}}
        >
          <h1>Projects</h1>
          <div className="d-flex flex-wrap wrapper">
            {data?.map((item, index) => (
              <div className="project_item" key={index}>
                <div className="item">
                  <Link to={`/detail/${item.id}`} title={item.title}>
                    <img src={publicURL(item.image)} alt={item.title} />
                    <div className="overlay">
                      <div className="link_icon">
                        <h5>{item.title}</h5>
                        <i className="fas fa-link"></i>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bonusInfo">
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
