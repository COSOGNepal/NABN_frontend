import "./Hero.css";
// import useFetch from "../hooks/useFetch.js";
import Data from "../data/home";
import { Link } from "react-router-dom";

function Hero() {
  // const { loading, error, data } = useFetch("https://charming-trust-6afb776746.strapiapp.com/api/home?populate[pagecontent][populate]=*");

  // if (loading) return <div className="hero-section loading">Loading...</div>;
  // if (error) return <div className="hero-section error">Error loading content</div>;

  // // Find the CTA component for the button text
  // const pageContent = data?.data?.pagecontent || [];
  // const ctaComponent = pageContent.find(
  //   component => component.__component === "components.cta"
  // );

  // // Find the image component
  // const imageComponent = pageContent.find(
  //   component => component.__component === "components.image"
  // );

  // // Use the full URL directly as it already includes the domain in cloud deployment
  // const imageUrl = imageComponent?.image?.url || null;

  const heroSection = Data.heroSection;
  const imageUrl = heroSection?.image?.url || null;

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {heroSection?.title || "Empowering Nepal's Youth"}
            </h1>
            <p className="hero-description">
              {heroSection?.subtitle ||
                "Join us in our mission to empower and uplift the youth of Nepal."}
            </p>

            <Link
              to={heroSection?.CTAbuttonlink || "#"}
              rel="noopener noreferrer"
              className="button button-primary"
            >
              {heroSection?.CTAbutton || "Learn More"}
            </Link>
          </div>
          <div className="hero-image">
            {imageUrl && <img src={imageUrl} alt="NAGN Nepal Logo" />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
