import "./OurServices.css";

function Services() {
  return (
    <div className="services">

      <h1>Our Services</h1>

      <p className="services-desc">
        We provide high quality sports products and services for all sports lovers.
        Our goal is to deliver best experience at affordable prices.
      </p>

      <div className="services-container">

        <div className="service-card">
          <h3>🏏 Sports Products</h3>
          <p>We offer cricket kits, footballs, rackets and more.</p>
        </div>

        <div className="service-card">
          <h3>🏃 Sports Training</h3>
          <p>Professional coaching for beginners and advanced players.</p>
        </div>

        <div className="service-card">
          <h3>🚚 Online Delivery</h3>
          <p>Fast and safe delivery to your doorstep.</p>
        </div>

        <div className="service-card">
          <h3>📞 Customer Support</h3>
          <p>24/7 support for all your queries and issues.</p>
        </div>

      </div>

    </div>
  );
}

export default Services;