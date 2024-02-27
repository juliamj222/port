import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {
  return (
    <>
      <div id="projectsWrapper">
        <h1 className="title">Projects</h1>
        {/* Finished Projects Section */}
        <div className="finishedProjects">
          <h2 className="projectTitle"> Finished Projects</h2>
          <ul className="projectList">
            {/* RentCraft section */}
            <li>
              {" "}
              <strong>RentCraft </strong>- Property Management Web App{" "}
              <a
                href="/projects/rentcraft"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                - Walkthrough
              </a>{" "}
              <a
                href="https://github.com/juliamj222/rentcraft-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                - GitHub Repo
              </a>{" "}
            </li>{" "}
            {/* Harmony Hotel section*/}
            <li>
              <strong>Harmony Hotel</strong> - Chat Web App
              <a
                href="/harmony-hotel"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                - Walkthrough
              </a>{" "}
              <a
                href="https://github.com/juliamj222/harmony"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                - GitHub Repo
              </a>{" "}
            </li>
            {/* Commented Blog section */}
            <li>
              <strong>Commented</strong> - Blog -{" "}
              <a
                href="/commented-blog"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                Walkthrough
              </a>
              <a
                href="https://github.com/juliamj222/commented-blog"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                - GitHub Repo
              </a>
            </li>
            {/* Escape B.H.: The Quest for Freedom section */}
            <li>
              <strong>Escape B.H. The Quest for Freedom </strong> - Text-Based
              Game{" "}
              <a
                href="/escape-bh"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                - Walkthrough
              </a>{" "}
              <a
                href="https://github.com/juliamj222/Escape-B.H.-The-Quest-for-Freedom"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                - GitHub Repo
              </a>{" "}
            </li>
            {/* Pokédex section */}
            <li>
              <strong>Pokédex</strong> - Pokémon Information Web App{" "}
              <a
                href="/pokedex"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                {" "}
                - Walkthrough
              </a>{" "}
              <a
                href="https://github.com/juliamj222/pokedex"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                - GitHub Repo
              </a>{" "}
            </li>
            {/* Math Games Console Application */}
            <li>
              <strong>Math Games </strong>- Console App{" "}
              <a
                href="/math-games"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                - Walkthrough
              </a>{" "}
              <a
                href="https://github.com/juliamj222/math-games-guess-the-number"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                - GitHub Repo
              </a>{" "}
            </li>
            {/* Jeopardy Website */}
            <li>
              <strong>Jeopardy </strong>
              <a
                href="https://juliamj222.github.io/jeopardy/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                - Web-based Jeopardy game
              </a>{" "}
              <a
                href="/Jeopardy"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                - Walkthrough
              </a>{" "}
              <a
                href="https://github.com/juliamj222/jeopardy"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                - GitHub Repo
              </a>{" "}
            </li>
          </ul>
        </div>

        {/* End Finished Projects Section */}

        {/* UnFinished Projects Section */}
        <div className="unFinishedProjects">
          <h2 className="projectTitle"> Projects I'm Working On</h2>
          <ul className="projectList">
            <li>
              La Quesera - 2/12/2024 - Quiz game in Spanish, made for elementary
              students -{" "}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                GitHub Repo
              </a>{" "}
            </li>
          </ul>
        </div>

        {/* End Unfinished Projects Section */}
      </div>
    </>
  );
}

export default Projects;
