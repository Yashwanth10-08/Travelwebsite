import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import service from "../Assets/service.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" bgImg={service} title="Service" />
      <br />
      <div className="Date">
        <div className="input-wrap">
          <label>check-in</label>
          <br />
          <input type="date" />
        </div>
      </div>
      <br />
      <div className="Date">
        <div className="input-wrap">
          <label>check-out</label>
          <br />
          <input type="date" />
        </div>
      </div>
      <br />
      <button>Submit</button>
      <Trip />

      <Footer />
    </>
  );
}

export default Service;
