import "../../App.css";
import juliaFishingCanoe from "../../assets/JuliaPics/juliaFishingCanoe.jpeg";
import juliaHikingUtah from "../../assets/JuliaPics/juliaHikingUtah.jpg";
import juliaRugby from "../../assets/JuliaPics/juliaRugby.jpeg";
import juliaComputer from "../../assets/JuliaPics/juliaComputer.jpeg";
import juliaTrumpet from "../../assets/JuliaPics/juliaTrumpet.jpeg";
import juliaUtah from "../../assets/JuliaPics/juliaUtah.jpg";
import juliaArchery from "../../assets/JuliaPics/juliaArchery.jpg";
import juliaClimbing from "../../assets/JuliaPics/juliaClimbing.jpg";
import juliaFishing from "../../assets/JuliaPics/juliaFishing.jpg";
import juliaHiking from "../../assets/JuliaPics/juliaHiking.jpg";

function Hobbies() {
  return (
    <>
      <div id="hobbiesWrapper">
        <h1 className="title">Hobbies and Interests</h1>
        {/* Fishing Section */}
        <div className="hobbyWrap">
          <h2 className="hobbyTitle">Fishing</h2>
          <div className="picText">
            <img
              src={juliaFishingCanoe}
              alt="Julia in a canoe"
              className="juliaHobby"
            />
            <p className="hobbyBlurb">
              {" "}
              I enjoy hanging out by the river or in the lake. My favorite time
              to go is in the summer, when I can jump in the water and see the
              little fish swimming around me. I'm not particularly lucky, but I
              sometimes end up catching some bass, perch, or a little brave
              bluegill.
            </p>
          </div>
        </div>
        {/* Hiking Section */}
        <div className="hobbyWrap">
          <h2 className="hobbyTitle">Hiking</h2>
          <div className="picText">
            <p className="hobbyBlurb">
              I love being outdoors: going for a walk, a hike, or organizing a
              camping trip. The fresh air, the beauty around me, and some
              quality time with friends always gets me excited.
            </p>
            <img
              src={juliaHikingUtah}
              alt="hiking in Utah"
              className="juliaHobby"
            />
          </div>
        </div>

        {/* Rugby Section */}
        <div className="hobbyWrap">
          <h2 className="hobbyTitle">Rugby</h2>
          <div className="picText">
            <img src={juliaRugby} alt="Rugby game" className="juliaHobby" />

            <p className="hobbyBlurb">
              I'm learning how to play rugby. I recently joined the Burlington
              rugby team and I am having an absolute blast. My favorite things
              are making split-second decisions, thinking creatively, and
              socializing with other teams.
            </p>
          </div>
        </div>

        {/* Trumpet Section */}
        <div className="hobbyWrap">
          <h2 className="hobbyTitle">Trumpet</h2>

          <div className="picText">
            <p className="hobbyBlurb">
              {" "}
              I love learning new things, and my current adventure is teaching
              myself how to play the trumpet. It's been quite the challenge, and
              I'm taking it easy, one day at a time!
            </p>

            <img
              src={juliaTrumpet}
              alt="Julia with a trumpet"
              className="juliaHobby"
            />
          </div>
        </div>
        {/* Coding Section */}
        <div className="hobbyWrap">
          <h2 className="hobbyTitle">Coding </h2>

          <div className="picText">
            <img
              src={juliaComputer}
              alt="Julia with a computer"
              className="juliaHobby"
            />
            <p className="hobbyBlurb">
              {" "}
              Coding makes me happy, and those "aha" moments light me up. I
              enjoy sticking with it, cracking the problems and not giving up. I
              am also a fan of teaming up with other developers, so that we all
              pitch in to reach our goals together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hobbies;
