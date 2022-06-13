import React from "react";
import "./header.css";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import { IconContext } from "react-icons";
import headerImg from "../../images/headerRachita.png";

import { Navbar } from "../../components";

const Header = () => {
  return (
    <div className="header">
      <div className="headerBar">
        <Navbar></Navbar>
        <p className="headerBar__name">Rachita Sharma</p>
        <div className="headerBar__socialIcons">
          <IconContext.Provider value={{ className: "shared-class", size: 40 }}>
            <a href="#">
              <AiIcons.AiFillLinkedin></AiIcons.AiFillLinkedin>
            </a>
            <a href="#">
              <AiIcons.AiFillYoutube></AiIcons.AiFillYoutube>
            </a>
            <a href="#">
              <AiIcons.AiFillFacebook></AiIcons.AiFillFacebook>
            </a>
            <a href="#">
              <AiIcons.AiFillInstagram></AiIcons.AiFillInstagram>
            </a>
          </IconContext.Provider>
        </div>
      </div>
      <div className="headerPart">
        <div className="headerPart__content">
          <h1>Rachita Sharma</h1>
          <h2>CEO &#38; Co-Founder of Girl Power Talk</h2>
          <p>
            Rachita Sharma is a technology entrepreneur, financial literacy
            advocate and gender rights activist. Rachita is the CEO of Girl
            Power Talk, based in India, a purpose driven organization.
          </p>
        </div>
        <div className="headerpart__img">
          <img src={headerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
