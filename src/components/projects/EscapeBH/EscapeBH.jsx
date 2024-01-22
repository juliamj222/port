import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../App.css";
import EscapeBHIntro from "../../../assets/EscapeBH/EscapeBHIntro.jpg";
import EscapeBHRoom from "../../../assets/EscapeBH/EscapeBHRoom.jpg";
import EscapeBHClimbHvac from "../../../assets/EscapeBH/EscapeBHClimbHvac.jpg";
import EscapeBHEnd from "../../../assets/EscapeBH/EscapeBHEnd.jpg";

function EscapeBH() {
  return (
    <>
      <div id="escapeBHWrapper">
        <h1 className="title">Escape B.H. Walkthrough</h1>
        <div className="projectWrap">
          <div className="projectExplained">
            {" "}
            <br />
            <h1>Escape-B.H.-The Quest for Freedom</h1>
            Interactive game engine where players explore locations, gather
            items, and make decisions to advance the storyline.
            <br />
            <br />
            <h2>Stories</h2>
            <br />
            <h2>One Room</h2>
            When the user launches the program
            <br />
            Then the console displays introductory text
            <br />
            And waits for input
            <br />
            And if the user types an unknown command
            <br />
            Then the game outputs "I don't know how to ____"
            <br />{" "}
            <img
              src={EscapeBHIntro}
              className="screenShot"
              alt="Introductory text"
            />{" "}
            <br />
            <h2>Interact With an Item</h2>
            Given the player has been given introductory text
            <br />
            When the player enters a valid command, and target
            <br />
            Then the game outputs accordingly
            <br />
            And puts the player in the starting room
            <br />
            And returns to the prompt
            <br />{" "}
            <img
              src={EscapeBHRoom}
              className="screenShot"
              alt="Accessing rooms"
            />{" "}
            <br />
            <h2>Immovable Objects</h2>
            Given the player is in the starting room
            <br />
            When the player attempts to take something that is not takeable
            <br />
            Then the game denies the player
            <br />
            <br />
            <h2>Locked Out</h2>
            Given the player is in the starting room
            <br />
            When the player attempts to enter a new room
            <br />
            Then the game denies the player
            <br />
            <br />
            <h2>Speak friend and enter</h2>
            Given the player is in the starting room
            <br />
            When the player solves a puzzle
            <br />
            Then the game allows the player to enter the next room
            <br />
            And the player moves into the next room
            <br />
            <br />
            <h2>Unauthorized Access</h2>
            Given the player is in the starting room
            <br />
            When the player fails the puzzle (e.g. enters the incorrect
            password)
            <br />
            Then the game denies the player entry
            <br />
            And the player remains in the starting room
            <br />{" "}
            <img
              src={EscapeBHClimbHvac}
              className="screenShot"
              alt="Climbing HVAC"
            />{" "}
            <br /> <h2>Foyer</h2>
            Given the player is in the next room
            <br />
            Then the game displays a description, with at least one (takeable)
            item in said description
            <br />
            <br />
            <h2>Inventory</h2>
            Given the player is in the next room
            <br />
            And the player has not yet picked up the item
            <br />
            When the player enters a command to pick it up
            <br />
            Then the game allows the player to do so
            <br />
            And the item is added to the player's inventory
            <br />
            <br />
            <h2>Display Inventory</h2>
            Given an item is in the player's 'inventory'
            <br />
            When the player types i or inventory or take inventory
            <br />
            Then the game displays the player's inventory
            <br />
            <br />
            <h2>Drop Inventory</h2>
            Given an item is in the player's inventory
            <br />
            When the player types drop ITEM
            <br />
            Then that item is removed from the player's inventory
            <br />
            And that item is added to the current room's inventory
            <br />
            <br />
            <h2>Keep Doors Open</h2>
            Given you have unlocked a door
            <br />
            When you try and open the door again
            <br />
            Then the door is still unlocked, and allow you to pass to the next
            room
            <br />{" "}
            <img
              src={EscapeBHEnd}
              className="screenShot"
              alt="End of the game"
            />{" "}
          </div>

          <a
            href="https://github.com/juliamj222/Escape-B.H.-The-Quest-for-Freedom"
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

export default EscapeBH;
