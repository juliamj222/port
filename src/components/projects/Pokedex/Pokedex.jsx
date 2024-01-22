import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../App.css";
import PokedexPikachu from "../../../assets/Pokedex/PokedexPikachu.jpg";
import PokedexCharizard from "../../../assets/Pokedex/PokedexCharizard.jpg";
import PokedexError from "../../../assets/Pokedex/PokedexError.jpg";

function Pokedex() {
  return (
    <>
      <div id="pokedexWrapper">
        <h1 className="title">Pokédex Walkthrough</h1>
        <div className="projectWrap">
          <div className="projectExplained">
            {" "}
            <br />
            <h1>Pokédex </h1>
            <p>
              {" "}
              The Pokédex project is a web application designed as an
              interactive guide for exploring details about Pokémon.
              <br />
              <br />
              <h2>Technology Stack</h2>
              - Framework: React
              <br />
              - Styling: Reactstrap (Bootstrap components)
              <br />
              - Interacts with the PokeAPI (external API).
              <br />
              <br />
              <h2>Stories</h2>
              <br />
              <h3>Landing Page</h3>
              When the user visits the index.html file.
              <br />
              Then they encounter the landing page.
              <br />
              And a centrally located "Play" button appears below the image.
              <br />
              And a footer displays site information.
              <br />
              Pokedex Landing Page <br />
              <br />
              <h3>Pokémon Search</h3>
              Given the user is on the landing page.
              <br />
              When they enter the name of a Pokémon and submit the form.
              <br />
              Then the Pokedex responds with an image and the specified
              Pokémon's weight.{" "}
            </p>
            <img
              src={PokedexPikachu}
              className="screenShot"
              alt="Pikachu information"
            />{" "}
            <br />
            <h3>Search for Another Pokémon</h3>
            Given the user is on the landing page.
            <br />
            When they enter the name of another Pokémon and press the "GO"
            button.
            <br />
            Then the Pokédex fetches and displays information for the newly
            specified Pokémon.
            <br />
            And the user sees the image and weight of the newly searched
            Pokémon.
            <br />{" "}
            <img
              src={PokedexCharizard}
              className="screenShot"
              alt="Charizard information"
            />{" "}
            <br />
            <h3>Error Handling</h3>
            Given the user is on the landing page.
            <br />
            When they enter a search query that is not a Pokémon's name and
            submit the form.
            <br />
            Then the Pokédex displays an error message indicating the search
            query is invalid.
            <br />
            And thus handles non-Pokémon searches.
            <br />{" "}
            <img
              src={PokedexError}
              className="screenShot"
              alt="Error handling"
            />{" "}
            <br />
          </div>
          <br />
          <a
            href="https://github.com/juliamj222/pokedex"
            target="_blank"
            rel="noopener noreferrer"
            className="externalLink"
          >
            Click here to see this GitHub repo.
          </a>
        </div>
      </div>
    </>
  );
}

export default Pokedex;
