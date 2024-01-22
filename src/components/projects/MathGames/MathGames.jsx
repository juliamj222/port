import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../App.css";
import MathGamesIntro from "../../../assets/MathGames/MathGamesIntro.jpg";
import MathGamesInput from "../../../assets/MathGames/MathGamesInput.jpg";
import MathGamesHigher from "../../../assets/MathGames/MathGamesHigher.jpg";
import MathGamesEnd from "../../../assets/MathGames/MathGamesEnd.jpg";

function MathGames() {
  return (
    <>
      <div id="mathGamesWrapper">
        <h1 className="title">Math Games Walkthrough</h1>
        <div className="projectWrap">
          <div className="projectExplained">
            {" "}
            <br />
            <h1>Guess My Number </h1>
            <p>
              Interactive console program with two Math games built in
              JavaScript (Node.js).
            </p>{" "}
            <br />
            <h1>Stories</h1>
            <img
              src={MathGamesIntro}
              className="screenShot"
              alt="Game intro"
            />{" "}
            <h2>Pick a number, any number</h2>
            Given the player starts the game with the command node index.js in
            the terminal
            <br />
            Then the computer asks the player if their number is a random number
            between 1 and 100
            <br />
            And waits for an answer, which it stores as a variable
            <br />{" "}
            <img
              src={MathGamesInput}
              className="screenShot"
              alt="Typing the number"
            />{" "}
            <br />
            <h2>The computer guessed wrong</h2>
            Given the computer has guessed a number
            <br />
            When the player responds "no" (or "n")
            <br />
            Then the computer asks if the number is higher or lower
            <br />{" "}
            <img
              src={MathGamesHigher}
              className="screenShot"
              alt="Game intro"
            />{" "}
            <h2>Modify your guess range</h2>
            Given the computer guessed the incorrect number
            <br />
            When the player responds "higher" ("h") or "lower" ("l")
            <br />
            Then the computer modifies the range it guesses within based on the
            answer
            <br />
            And guesses a new number within the modified range
            <br />
            Given the example above the computer now guesses between 75 and 100
            <br />
            <br />
            <h2>Let the computer win</h2>
            Given the computer has guessed a number
            <br />
            When the player responds "right" (or "r")
            <br />
            Then the game exits with a victory message.
            <br />
            e.g. Your number was X!
            <br />{" "}
            <img
              src={MathGamesEnd}
              className="screenShot"
              alt="End of the game"
            />{" "}
            <h1>Role Reversal!</h1>
            <h2>
              The reverse game: the computer picks a number, the person guesses
              it.
            </h2>
            Given The game has been started with node reverse_game.js
            <br />
            Then the game will ask you to guess a number
            <br />
            And if you guess wrong it will tell you if you guessed too high or
            too low
            <br />
            And prompt you to guess again
            <br />
            When you guess correctly the computer will congratulate you, and end
            the game
            <br /> <br />
          </div>
          <br />
          <a
            href="https://github.com/juliamj222/math-games-guess-the-number"
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

export default MathGames;
