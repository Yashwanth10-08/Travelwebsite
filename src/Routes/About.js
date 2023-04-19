import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../Assets/night.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" bgImg={AboutImg} title="About" />
      <Aboutus />
      <Footer />
    </>
  );
}

export default About;
