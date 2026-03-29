import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Divider from "./components/Divider";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Achievements />
      <Divider />
      <Projects />
      <Divider />
      <Certificates />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </div>
  );
}

export default App;