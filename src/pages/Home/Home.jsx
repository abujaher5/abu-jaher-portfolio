import About from "../../sections/About";
import Banner from "../../sections/Banner";
import Contact from "../../sections/Contact";
import Projects from "../../sections/Projects";
import Skills from "../../sections/Skills";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
