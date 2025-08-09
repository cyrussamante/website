import "./Hero.css";
import Button from "../components/Button";

const greeting = "Hey, I'm";
const name = "CYRUSS AMANTE";
const description =
  "A passionate web developer with a love for creating dynamic and responsive user experiences.";

function Hero() {
  return (
    <div className="Hero">
      <section className={"left-section"}>
        <div className="text-container">
          <h3 className="greeting">{greeting}</h3>
          <h1 className="name">{name}</h1>
          <p>{description}</p>
          <Button id="hero-btn" type="button" variant="primary" size="lg">
            Check out my work
          </Button>
        </div>
      </section>
      <section className="right-section">
        <img
          src="../images/hero-image.jpg"
          alt="An image of Cyruss Amante showing his iron ring."
          className="hero-image"
        />
        <div className="circle-backdrop">
          <div className="circle c1" />
          <div className="circle c2" />
          <div className="circle c3" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
