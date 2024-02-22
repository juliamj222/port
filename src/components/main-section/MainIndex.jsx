import juliaProfile from "../../assets/JuliaPics/juliaProfile.jpeg";
import "../../App.css";
//rsfc

function MainIndex(props) {
  return (
    <>
      <div id="profileWrapper">
        <img src={juliaProfile} alt="julia's profile" id="julia-profile" />
        <div id="shortPitch">
          <h1 id="juliaName">Julia Menéndez Jardón</h1>

          <ul>
            <li>Problem solver and lifelong learner</li>
            <li>Linguistics and Education</li> <li>Software Development</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainIndex;
