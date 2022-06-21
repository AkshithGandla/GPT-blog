import React from "react";
import "./collab.css";
import collabB from "../../images/collabBG.png";
import collab_1 from "../../images/collab_1.png";
import collab_2 from "../../images/collab_2.png";
import collab_3 from "../../images/collab_3.png";

const Collab = () => {
  return (
    <div className="collab_container">
      {/*  <img src={collabB} alt="" /> */}
      <div className="collab__cards">
        <img src={collab_1} alt="" />
        <img src={collab_2} alt="" />
        <img src={collab_3} alt="" />
      </div>
    </div>
  );
};

export default Collab;
