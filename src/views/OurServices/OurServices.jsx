import "../OurServices/OurServices";
import serviceImg from "../../assets/Tennis.png";  

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>

      <div className="services-container">
        <div className="service-card">🏏 Sports Products</div>
        <div className="service-card">🏃 Sports Training</div>
        <div className="service-card">🚚 Online Delivery</div>
        <div className="service-card">📞 Customer Support</div>
      </div>

      {/* 👇 Image niche */}
      <img src={serviceImg} alt="services" className="service-img" />
    </div>
  );
}

export default Services;