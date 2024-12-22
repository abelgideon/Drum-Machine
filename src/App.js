import React from "react";
import { useState } from "react";

const App = (props) => {
  const [sound, setSound] = useState("Sound");
  const body = document.querySelector("body");
  body.classList =
    "parent bg-dark d-flex justify-content-center align-items-center h-100";
  document.addEventListener("keydown", (e) => {
    const audio = document.getElementById(e.key.toUpperCase());
    if (audio) {
      audio.play();
      setSound(audio.parentElement.id);
    }
  });
  return (
    <div id="drum-machine" className="container border">
      <div className="row">
        <DrumPads setSound={setSound} />
        <Display text={sound} />
      </div>
    </div>
  );
};

const DrumPads = ({ setSound }) => {
  return (
    <div className="col-12 p-3">
      <div class="container">
        <div class="row gap-2 justify-content-center">
          <Pad
            setSound={setSound}
            id="Heater-1"
            letter="Q"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
          />
          <Pad
            setSound={setSound}
            id="Heater-2"
            letter="W"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
          />
          <Pad
            setSound={setSound}
            id="Heater-3"
            letter="E"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
          />
        </div>
        <div class="row gap-2 justify-content-center">
          <Pad
            setSound={setSound}
            id="Heater-4"
            letter="A"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
          />
          <Pad
            setSound={setSound}
            id="Clap"
            letter="S"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
          />
          <Pad
            setSound={setSound}
            id="Open-HH"
            letter="D"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
          />
        </div>
        <div class="row gap-2 justify-content-center">
          <Pad
            setSound={setSound}
            id="Kick-n'-Hat"
            letter="Z"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
          />
          <Pad
            setSound={setSound}
            id="Kick"
            letter="X"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
          />
          <Pad
            setSound={setSound}
            id="Closed-HH"
            letter="C"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
          />
        </div>
      </div>
    </div>
  );
};

const Pad = ({ id, letter, src, setSound }) => {
  return (
    <button
      onClick={(e) => {
        const audio = document.getElementById(e.target.textContent);
        audio.play();
        setSound(e.target.id);
      }}
      id={id}
      className="btn btn-light drum-pad col-3 g-2"
    >
      {letter}
      <audio className="clip" id={letter} src={src} type="audio/mp3"></audio>
    </button>
  );
};

const Display = ({ text }) => {
  return (
    <div className="col-12 text-center bg-secondary mt-2">
      <p id="display" class="h4 my-auto p-3">
        {text}
      </p>
    </div>
  );
};

export default App;