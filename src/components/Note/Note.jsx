import React from "react";
import msgNote from "../../images/noteBG.png";
import "./note.css";

const Note = () => {
  return (
    <div className="noteContainer">
      <img src={msgNote} alt="" />
    </div>
  );
};

export default Note;
