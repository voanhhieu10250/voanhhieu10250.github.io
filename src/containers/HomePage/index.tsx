import React, { useContext } from "react";
import Header from "./Header";
import Navbar from "../../components/navbar";
import { DataContext } from "../../App";

const HomePage: React.FC = () => {
  const data = useContext(DataContext);
  return (
    <div>
      <Navbar data={data?.home.navbar} />
      <Header data={data?.home.main} />
    </div>
  );
};

export default HomePage;
