import Navbar from "../components/Navbar";
import Header from "../components/Header";
import background from "../assets/background.png";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <div id="header">
        <Header />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
