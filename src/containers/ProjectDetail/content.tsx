import React, { Fragment } from "react";
import publicURL from "../../helper/publicUrl";

interface Props {
  data: {
    source: string;
    title: string;
    description: string;
    tech: string[];
    pictures: string[];
    content: {
      header: string;
      text: string;
    }[];
  } | null;
}

const Content: React.FC<Props> = ({ data }) => {
  return (
    <div className="article">
      <div className="article_header">
        <h2>{data?.title}</h2>
        <div className="d-inline-block githubLink">
          <a
            className="link"
            href={data?.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <h6 className="d-inline-block">{data?.description}</h6>
        <div className="badge_list">
          <ul>
            {data?.tech.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="article_body clearfix">
        <div
          id="carouselImage"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-pause="false"
          data-bs-interval="2000"
        >
          <div className="carousel-indicators">
            {data?.pictures.map((_, index) => (
              <button
                type="button"
                data-bs-target="#carouselImage"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                key={index}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {data?.pictures.map((item, index) => (
              <div
                className={`carousel-item${index === 0 ? " active" : ""}`}
                key={index}
              >
                <img
                  src={publicURL(item)}
                  className="d-block w-100"
                  alt="project image"
                />
              </div>
            ))}
          </div>
          {data && data.pictures.length > 1 && (
            <Fragment>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselImage"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselImage"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </Fragment>
          )}
        </div>
        {data?.content.map((item, index) => (
          <Fragment key={index}>
            <h4 hidden={!item.header}>{item.header}</h4>
            <p>{item.text}</p>
            <br />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Content;
