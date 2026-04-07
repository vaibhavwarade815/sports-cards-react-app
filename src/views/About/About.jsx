import "./About.css";
import aboutImg from "../../assets/cricket.png";   

function About() {
  return (
    <div className="about">
      <h1>About Sports Shop</h1>

      <img src={aboutImg} alt="sports" className="about-img" />

      <p>
        Sports Shop is a website where you can buy sports equipment like Cricket kit,
        Football, Basketball, Tennis and more. We provide best quality sports products
        at affordable price.
      </p>
    </div>
  );
}

export default About;