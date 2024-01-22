import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../App.css";
import JeopardyIndex from "../../../assets/Jeopardy/JeopardyIndex.jpg";
import Jeopardy1st from "../../../assets/Jeopardy/Jeopardy1st.jpg";

function Jeopardy() {
  return (
    <>
      <div id="jeopardyWrapper">
        <h1 className="title">Jeopardy Walkthrough</h1>
        <div className="projectWrap">
          <div className="projectExplained">
            {" "}
            <br />
            <h1>Jeopardy Board </h1>
            <p>
              The great American quiz show that has been a staple of network
              television since the 60s.
            </p>{" "}
            <br />
            <h1>Stories</h1>
            <h2> The Landing Page </h2>
            When the user visits the index.html file. <br />
            Then they see the landing page. <br />
            And a "Play" button centered below the image. <br />
            And a footer displaying site information. <br />{" "}
            <img
              src={JeopardyIndex}
              className="screenShot"
              alt="Landing page"
            />{" "}
            <br />
            <h2>Navigation to First Round </h2>
            Given the user is on the landing page.
            <br />
            When they click the "Play" button.
            <br />
            Then they are routed to the first round page.
            <br />{" "}
            <img
              src={Jeopardy1st}
              className="screenShot"
              alt="First round"
            />{" "}
            <br />
            <h2>First Round </h2>
            Given the user is on the first round page.
            <br />
            Then they see a title, that indicates it's the first round.
            <br />
            And they see a subtitle that indicates whose turn it is.
            <br />
            And a 6X6 grid with category names across the top row, and points
            from 200 - 1000 below each category, doubling in each row.
            <br />
            And they see a box to enter their input, a Guess button, a Pass
            button.
            <br />
            And they see the scores of Player 1 and Player 2 displayed.
            <br />
            <br />
            <h2>Navigation to Second Round </h2>
            Given the user is on the first round page.
            <br />
            When they click the button to navigate to the second round page.
            <br />
            Then they are routed to the second round page. <br />
            <br /> <h2>Second Round Page</h2>
            Given the user is on the second round page.
            <br />
            Then they see a title, that indicates it's the second round.
            <br />
            And they see a subtitle that indicates whose turn it is.
            <br />
            And a 6X6 grid with category names across the top row, and points
            from 400 - 2000 below each category, doubling in each row.
            <br />
            And they see a box to enter their input, a Guess button, a Pass
            button.
            <br />
            And they see the scores of Player 1 and Player 2 displayed.
            <br />
            And a button to navigate to the next round.
            <br /> <br /> <h2>Final Jeopardy Navigation</h2>
            Given the user is on the second round page. <br />
            When they click the button to the next round. <br />
            Then they are taken to the Final Round page. <br /> <br />
            <br />
            <h2>Final Round</h2>
            Given the user is on the Final Round page. <br />
            Then they see a title indicating it's the Final Round. <br />
            And a single final category with a single final question. <br />
          </div>
          <br />
          <a
            href="https://github.com/juliamj222/jeopardy"
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

export default Jeopardy;
