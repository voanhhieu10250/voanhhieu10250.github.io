import React from "react";

type Data =
  | {
      url: string;
      className: string;
    }[]
  | null;

interface Props {
  data: Data;
}

const Footer: React.FC<Props> = ({ data }) => {
  return (
    <footer className="footer">
      <div className="footer_group">
        {data?.map((item, index) => {
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
      <div className="footer_group">
        <p>
          Made by <span>Vo Anh Hieu</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
