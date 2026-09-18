import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Build Your
          <span> Dev Stack</span>
        </h1>

        <p>
          Explore modern technologies and build the skills you need
          to become a better developer.
        </p>

        <div className="hero-buttons">
          <button className="primary-button">
            Explore Technologies
          </button>

          <button className="secondary-button">
            Learn More
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={bannerStack} alt="Developer illustration" />
      </div>
    </section>
  );
}

export default Hero;