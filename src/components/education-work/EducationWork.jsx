import "../../App.css";
import JuliaResume from "../../assets/JuliaResume.pdf";

function EducationWork() {
  return (
    <>
      <div id="educationWorkWrapper">
        <a
          href={JuliaResume}
          target="_blank"
          rel="noopener noreferrer"
          className="externalLink"
        >
          Click here for a downloadable pdf.
        </a>
        <h1 className="title">Education and Professional Experience</h1>
        {/* Education Section */}
        <div id="educationWrap">
          <h2 className="educationWorkTitle">Education</h2>

          <ul className="educationWorkList">
            <li>Software Development Certificate | Burlington Code Academy </li>
            <li>
              Phd. in Humanities - Spanish Sociolinguistics | University of
              Oviedo{" "}
            </li>
            <li> M.A. in Language Pedagogy | University of Utah</li>
            <li>
              {" "}
              Higher Education Teaching Specialist and TESOL Certificate |
              University of Utah
            </li>
            <li>B.A. in English Studies | University of Oviedo </li>
            <li>
              Diploma in European Culture and Languages | University of Kent
            </li>
          </ul>
        </div>

        {/* Work Section */}
        <div className="workWrap">
          <h2 className="educationWorkTitle">Professional Experience</h2>

          <ul className="educationWorkList">
            <li>
              Teacher and translator | Jericho Elementary School, Vermont 2019 –
              2023
            </li>
            <li>Teacher | Language Learning Network, remote 2021 – 2022</li>
            <li> Curriculum developer | Inksplash LLC, remote 2021 – 2022</li>
            <li> Teacher | Colegio Montearagón, Spain 2018 – 2019</li>
            <li>Teacher | West High School, Utah 2017 – 2018 </li>
            <li>
              Teacher and translator | Mill Creek Elementary School, Utah 2016 –
              2017
            </li>
            <li>Research assistant | University of Utah 2014 – 2015</li>
            <li>IT helpdesk | University of Utah 2013 – 2014</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default EducationWork;
