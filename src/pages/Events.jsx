import "./Events.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";
// import useFetch from "../hooks/useFetch.js";

import Data from "../data/events.js";

export default function Events() {
  // const { loading, error, data } = useFetch("https://charming-trust-6afb776746.strapiapp.com/api/events?populate=*&pagination[pageSize]=250");

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // // Get the events data from the response
  // const events = data?.data || [];

  useEffect(() => {
    document.title = "Events | National Adolescent Girls Network Nepal";
  }, []);

  const events = Data;

  // Sort events by date (newest first)
  const sortedEvents = [...events].sort((a, b) => {
    // Convert strings to Date objects for comparison
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    // Sort in descending order (newest first)
    return dateB - dateA;
  });

  return (
    <div className="events-page">
      <Header />
      <div className="events-container">
        {sortedEvents.length > 0 ? (
          sortedEvents.map((event) => {
            // Use the full URL directly from the API
            const imageUrl = event.image?.url || "placeholder-image.jpg";

            return (
              <div key={event.id} className="event-card">
                <img
                  src={imageUrl}
                  alt={event.title || "Event"}
                  className="event-image"
                />
                <div className="event-details">
                  <p className="date">{event.date || "TBA"}</p>
                  <h2 className="event-title">
                    {event.title || "Event Title"}
                  </h2>
                  <p className="event-description">
                    {event.description || "No description available"}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No events found</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
