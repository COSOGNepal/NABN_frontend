import './AboutUs.css';
import Header from '../components/Header.jsx';
import Footer from "../components/Footer.jsx";
import { useEffect } from 'react';
// import useFetch from "../hooks/useFetch.js";

import Data from "../data/about.js";

function AboutUs() {

  useEffect(() => {
      document.title = "About Us | National Adolescent Girls Network Nepal";
    }, []);

  // const { loading, error, data } = useFetch("https://charming-trust-6afb776746.strapiapp.com/api/about?populate[pagecontent][populate]=*");

  // // Handle loading and error states
  // if (loading) return (
  //   <>
  //     <Header />
  //     <div className="about-container loading">Loading...</div>
  //     <Footer />
  //   </>
  // );
  
  // if (error) return (
  //   <>
  //     <Header />
  //     <div className="about-container error">Failed to load content</div>
  //     <Footer />
  //   </>
  // );

  // // Extract components from the pagecontent array
  // const pageContent = data?.data?.pagecontent || [];
  
  // // Find the background image component
  // const backgroundImage = pageContent.find(item => item.__component === "components.backgroundimage");
  
  // // Get all title and description components
  // const contentSections = [];
  
  // // Group title and description components into sections
  // pageContent.forEach(item => {
  //   if (item.__component === "components.title") {
  //     contentSections.push({
  //       title: item.title,
  //       descriptions: []
  //     });
  //   } else if (item.__component === "components.description" && contentSections.length > 0) {
  //     // Add description to the last section
  //     contentSections[contentSections.length - 1].descriptions.push(item.description);
  //   }
  // });
  
  // // Use the full URL directly as it already includes the domain in cloud deployment
  // const imageUrl = backgroundImage?.image?.url || null;

  const aboutSection = Data;
  const imageUrl = aboutSection?.image?.url || null;
  const contentSections = aboutSection?.contentSections || [];

  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            {imageUrl && (
              <img 
                src={imageUrl} 
                alt="About Us" 
              />
            )}
          </div>

          <div className="content-section">
            {contentSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="section">
                <h1 style={{ marginBottom: '1.5rem' }}> {section.title}</h1>
                
                {section.descriptions.map((description, descIndex) => (
                  <p 
                    key={`${sectionIndex}-${descIndex}`} 
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {description}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;