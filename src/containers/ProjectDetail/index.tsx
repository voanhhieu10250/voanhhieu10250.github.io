import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../App";
import Footer from "../ProjectDetail/footer";
import Content from "../ProjectDetail/content";

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = useContext(DataContext);

  const getDataContent = <T extends object>(
    obj: T
  ): T[Extract<keyof T, string>] | null => {
    for (const prop in obj) {
      if (prop === id) return obj[prop];
    }
    return null;
  };

  return (
    <div className="base">
      <header className="header">
        <nav className="topnav">
          <div className="logo_link">
            <Link to="/">Hieu Vo</Link>
          </div>
        </nav>
      </header>
      <Content data={data ? getDataContent(data.detail) : null} />
      <Footer data={data?.detail.footer} />
    </div>
  );
};

export default ProjectDetailPage;
