import "../../App.css";
import JuliaTeaching from "../../assets/JuliaPics/JuliaTeaching.jpg";
import TrelloBoard from "../../assets/JuliaPics/TrelloBoard.jpg";
import JuliaPresentation from "../../assets/JuliaPics/JuliaPresentation.jpg";

function MoreAboutMe() {
  return (
    <>
      <div id="skillsWrapper">
        <h1 className="title">Transferable Skills</h1>

        {/* Problem-Solving skills Section */}
        <div className="skillsWrap">
          <h2 className="skillsTitle">Problem Solving</h2>
          <div className="picText">
            <img src={TrelloBoard} alt="Trello board" className="juliaSkill" />
            <ul className="skillsBlurb">
              {" "}
              <li>Agile Development practices</li>{" "}
              <li>
                {" "}
                Attention to detail, editing and improvement of plans and
                documents.
              </li>{" "}
              <li>
                {" "}
                Teaching problem-solving techniques, to students elementary
                through college.
              </li>
            </ul>
          </div>
        </div>
        {/* Communication Skills Section */}

        <div className="skillsWrap">
          <h2 className="skillsTitle">Communication</h2>
          <div className="picText">
            <ul className="skillsBlurb">
              {" "}
              <li>12+ years writing and publishing in Academia </li>{" "}
              <li>
                {" "}
                10+ years communicating with stakeholders, using multiple media
              </li>{" "}
              <li>
                {" "}
                Sociolinguistics PhD: understanding of languages and logic
              </li>
              <li>
                Fluent in English, Spanish and French. Beginner in German.
              </li>
              <li>Translation and interpretation: EN-SP, SP-EN</li>
              <li>Customer service experience</li>
            </ul>
            <img
              src={JuliaPresentation}
              alt="Julia leading a teacher training"
              className="juliaSkill"
            />
          </div>
        </div>

        {/* Teamwork skills Section */}
        <div className="skillsWrap">
          <h2 className="skillsTitle">Teamwork</h2>
          <div className="picText">
            <img
              src={JuliaTeaching}
              alt="Julia teaching"
              className="juliaSkill"
            />
            <ul className="skillsBlurb">
              {" "}
              <li>10+ years creating classroom and school communities.</li>{" "}
              <li>
                {" "}
                Collaboration with coworkers and other stakeholders to achieve
                common goals
              </li>{" "}
              <li> Player in the Burlington Rugby team - New England league</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreAboutMe;
