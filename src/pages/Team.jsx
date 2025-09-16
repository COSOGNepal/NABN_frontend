import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import logo from "../assets/logo.png";
import "./Team.css";

import { currentMembers, pastMembers } from "../data/team.js";

function Team() {
  const [members, setMembers] = useState(currentMembers);
  const [activeTab, setActiveTab] = useState("current");

  useEffect(() => {
    document.title = "Our Team | National Adolescent Girls Network Nepal";
  }, []);

  return (
    <div className="team-page">
      <Header />
      <div className="team-container">
        <h1 className="team-title">Meet Our Team</h1>

        {/* add a toggle button to switch between current and past members */}
        <div
          className="team-toggle"
          role="tablist"
          aria-label="Team category tabs"
        >
          <button
            role="tab"
            aria-selected={activeTab === "current"}
            className={`team-toggle-btn ${
              activeTab === "current" ? "active" : ""
            }`}
            onClick={() => {
              setMembers(currentMembers);
              setActiveTab("current");
            }}
          >
            Current Members
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "past"}
            className={`team-toggle-btn ${
              activeTab === "past" ? "active" : ""
            }`}
            onClick={() => {
              setMembers(pastMembers);
              setActiveTab("past");
            }}
          >
            Past Members
          </button>
        </div>
        <div className="team-members">
          {members.length > 0 ? (
            members.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-image-container">
                  <img
                    src={member.image?.url || logo}
                    alt={`${member.name} portrait`}
                    className="member-image"
                  />
                </div>
                <div className="member-details">
                  <h2 className="member-name">{member.name}</h2>
                  <p className="member-position">{member.position}</p>
                  {member.description && (
                    <p className="member-description">{member.description}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No members found</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
