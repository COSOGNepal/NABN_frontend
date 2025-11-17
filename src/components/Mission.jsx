import './Mission.css'
// import useFetch from "../hooks/useFetch.js";
import Data from "../data/home.js";

function Mission() {
  // const { loading, error, data } = useFetch("https://charming-trust-6afb776746.strapiapp.com/api/home?populate[pagecontent][populate]=*");

  // if (loading) return <div className="mission-section loading">Loading...</div>;
  // if (error) return <div className="mission-section error">Error loading content</div>;

  // // Find the mission section component
  // const pageContent = data?.data?.pagecontent || [];
  // const missionSection = pageContent.find(
  //   component => component.__component === "components.missionsection"
  // );

  // // Use the full URLs directly as they already include the domain in cloud deployment
  // const icon1Url = missionSection?.icon1?.url || null;
  // const icon2Url = missionSection?.icon2?.url || null;
  // const icon3Url = missionSection?.icon3?.url || null;

  const missionSection = Data.missionSection;
  const icon1Url = missionSection?.icon1?.url || null;
  const icon2Url = missionSection?.icon2?.url || null;
  const icon3Url = missionSection?.icon3?.url || null;
  const icon4Url = missionSection?.icon4?.url || null;
  const icon5Url = missionSection?.icon5?.url || null;
  const icon6Url = missionSection?.icon6?.url || null;
  return(
    <section className="mission-section">
      <div className="container">
        <div className="mission-grid">
          <div className="mission-card">
            {icon1Url && (
              <img
                src={icon1Url}
                alt={missionSection?.mission1 || "Adolescent Participation"}
                className="mission-icon"
              />
            )}
            <h3 className="mission-title">
              {missionSection?.mission1 || "Adolescent Participation"}
            </h3>
            <p className="mission-description">
              {missionSection?.mission1subtitle || "Empowering adolescents to raise their voices, lead movements, and shape the future of Nepal."}
            </p>
          </div>

          <div className="mission-card">
            {icon2Url && (
              <img
                src={icon2Url}
                alt={missionSection?.mission2 || "Child Marriage Prevention"}
                className="mission-icon"
              />
            )}
            <h3 className="mission-title">
              {missionSection?.mission2 || "Child Marriage Prevention"}
            </h3>
            <p className="mission-description">
              {missionSection?.mission2subtitle || "Ending child marriage through awareness, advocacy, and action for a brighter tomorrow."}
            </p>
          </div>

          <div className="mission-card">
            {icon3Url && (
              <img
                src={icon3Url}
                alt={missionSection?.mission3 || "Breaking Barriers"}
                className="mission-icon"
              />
            )}
            <h3 className="mission-title">
              {missionSection?.mission3 || "Breaking Barriers"}
            </h3>
            <p className="mission-description">
              {missionSection?.mission3subtitle || "Reaching remote villages, ending silence, and empowering adolescents to speak out for change."}
            </p>
          </div>

          <div className="mission-card">
            {icon4Url && (
              <img
                src={icon4Url}
                alt={missionSection?.mission4 || "Equal Opportunities"}
                className="mission-icon"
              />
            )}
            <h3 className="mission-title">
              {missionSection?.mission4 || "Equal Opportunities"}
            </h3>
            <p className="mission-description">
              {missionSection?.mission4subtitle || "Ensuring equal access to education, resources, and rights for every adolescent, everywhere."}
            </p>
          </div>

          <div className="mission-card">
            {icon5Url && (
              <img
                src={icon5Url}
                alt={missionSection?.mission5 || "From Local to National"}
                className="mission-icon"
              />
            )}
            <h3 className="mission-title">
              {missionSection?.mission5 || "From Local to National"}
            </h3>
            <p className="mission-description">
              {missionSection?.mission5subtitle || "Strengthening adolescents’ voices from grassroots to policy level for lasting impact."}
            </p>
          </div>

          <div className="mission-card">
            {icon6Url && (
              <img
                src={icon6Url}
                alt={missionSection?.mission6 || "Leadership Development"}
                className="mission-icon"
              />
            )}
            <h3 className="mission-title">
              {missionSection?.mission6 || "Leadership Development"}
            </h3>
            <p className="mission-description">
              {missionSection?.mission6subtitle || "Building strong, confident, and skilled adolescent leaders for social change."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission