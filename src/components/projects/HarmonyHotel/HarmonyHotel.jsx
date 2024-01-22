import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../App.css";
import harmonyLogin from "../../../assets/Harmony/harmonyLogin.jpg";
import harmonySignUp from "../../../assets/Harmony/harmonySignUp.jpg";

function Harmony() {
  return (
    <>
      <div id="harmonyWrapper">
        <h1 className="title">Harmony Hotel Walkthrough</h1>
        <div className="projectWrap">
          <div className="projectExplained">
            {" "}
            <br />
            <h1>Harmony Hotel </h1>
            <p>
              Chatroom where users can register, access rooms and send messages.
              <br />
              Developed by Khale and Julia.
            </p>{" "}
            <br />
            <h2>Technology Stack</h2> <br />
            <h3>
              {" "}
              <strong>Backend:</strong>
            </h3>
            Runtime: Node.js <br />
            Framework: Express.js <br />
            <br />
            <h3>
              <strong>Frontend:</strong>
            </h3>
            Framework: React <br />
            Styling: Reactstrap (Bootstrap components) <br /> <br />
            <h2>Stories</h2>
            <br />
            <h2>Users </h2>
            · Create user endpoint
            <br />
            Given the need to create a user.
            <br />
            When the user initiates the creation endpoint.
            <br />
            Then the user is able to create a new user.
            <br />{" "}
            <img src={harmonySignUp} className="screenShot" alt="signup" />{" "}
            <br />
            · Login user endpoint
            <br />
            Given the need to log in a user.
            <br />
            When the user initiates the login endpoint.
            <br />
            Then the user is able to log in successfully.
            <br /> <br />
            <h2> Rooms </h2>
            · Create endpoint
            <br />
            Given the need to create a room.
            <br />
            When the user initiates the creation endpoint.
            <br />
            Then a new room is successfully created.
            <br />
            <br />
            · Display all rooms endpoint
            <br />
            Given the need to view all available rooms.
            <br />
            When the user initiates the display all rooms endpoint.
            <br />
            Then the user is presented with a list of all available rooms.
            <br />
            <br />
            <h2> Messages</h2>
            · Display all messages within a room endpoint
            <br />
            Given the need to view all messages within a room.
            <br />
            When the user initiates the display all messages within a room
            endpoint.
            <br />
            Then the user is presented with a list of all messages within that
            room.
            <br />
            <br />
            · Create a message within a room endpoint
            <br />
            Given the need to create a message within a room.
            <br />
            When the user initiates the create message within a room endpoint.
            <br />
            Then a new message is successfully created within the specified
            room.
            <br />
            <br />
            · Update a message within a room endpoint
            <br />
            Given the need to update a message within a room.
            <br />
            When the user initiates the update message within a room endpoint.
            <br />
            Then the selected message is successfully updated within the
            specified room.
            <br />
            <br />
            · Delete a message within a room endpoint
            <br />
            Given the need to delete a message within a room.
            <br />
            When the user initiates the delete message within a room endpoint.
            <br />
            Then the selected message is successfully deleted within the
            specified room.
            <br />
            <br />
            <h2> Auth Component</h2>
            This component allows the user to register and signup.
            <br />
            Given the user's intention to register or signup.
            <br />
            When the user interacts with the Auth component.
            <br />
            Then the component provides conditional rendering to switch between
            both states.
            <br />
            <img src={harmonyLogin} className="screenShot" alt="login" /> <br />
            Its functional end result updates the localStorage token in the
            browser's client.
            <br />
            Given the successful registration or signup.
            <br />
            When the user completes the process.
            <br />
            Then the localStorage token is updated in the browser's client.
            <br />
            <br />
            The token functionality is best put inside App.jsx so that other
            components can freely use it as well.
            <br />
            Given the need for widespread token usage.
            <br />
            When incorporating token functionality.
            <br />
            Then it is best placed inside App.jsx for seamless use by other
            components.
            <br />
            <br />
            <h2> Rooms Component</h2>
            This component allows the user to view all available rooms.
            <br />
            Given the user's desire to view available rooms.
            <br />
            When the user interacts with the Rooms component.
            <br />
            Then they are presented with a list of all available rooms.
            <br />
            <br />
            When clicked upon a room, they are invited to the respective room.
            <br />
            Given the user's selection of a specific room.
            <br />
            When clicking on the chosen room.
            <br />
            Then the user is invited to enter the respective room.
            <br />
            <br />
            <h2> Room Component</h2>
            This component consists of two sub-components: input and the view.
            <br />
            Given the need for message input and viewing.
            <br />
            When the user interacts with the Room component.
            <br />
            Then they encounter two sub-components: input and view.
            <br />
            <br />
            The input allows the user to input text into the field.
            <br />
            Given the user's intention to input text.
            <br />
            When utilizing the input sub-component.
            <br />
            Then the user can input text into the designated field.
            <br />
            <br />
            After the input has been registered, the user has a send button to
            the right of the field.
            <br />
            Given the completion of text input.
            <br />
            When the user is ready to send the message.
            <br />
            Then a send button is available to the right of the field.
            <br />
            <br />
            This button sends the request over to the server's respective
            endpoint.
            <br />
            Given the user's action of sending the message.
            <br />
            When clicking the send button.
            <br />
            Then the request is successfully sent to the server's respective
            endpoint.
            <br />
            <br />
            The view sub-component consists of an area where users can see all
            of the messages within a particular room.
            <br />
            Given the user's desire to view messages.
            <br />
            When interacting with the view sub-component.
            <br />
            Then the user sees an area displaying all messages within the
            specified room.
            <br /> <br />
            <a
              href="https://github.com/juliamj222/harmony"
              target="_blank"
              rel="noopener noreferrer"
              className="externalLink"
            >
              Click here to see this GitHub repo.
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Harmony;
