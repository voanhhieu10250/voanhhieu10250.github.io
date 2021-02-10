import React, { useContext } from "react";
import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { DataContext } from "../../App";

const HomePage: React.FC = () => {
  const data = useContext(DataContext);
  return (
    <div>
      <Navbar data={data?.home.navbar} />
      <Header data={data?.home.main} />
      <About data={data?.home.about} />
      <Resume data={data?.home.resume} />
      <Projects data={data?.home.project} bonusInfo={data?.home.bonusInfo} />
      <Contact data={data?.home.contact} />
      <Footer />
    </div>
  );
};

export default HomePage;
