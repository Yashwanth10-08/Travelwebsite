import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contact from "../Assets/contact1.jpg";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-contact" bgImg={contact} title="contact" />
      <Contactform />
      <Footer />
    </>
  );
}

export default Contact;
