import React from "react";
import "./about.css";
import aboutRachitaImage from "../../images/aboutRachitaImg.png";

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <div className="about__image">
          <img src={aboutRachitaImage} alt="" />
        </div>
        <div className="about_content">
          <h2>About Rachita</h2>
          <p>
            Rachita Sharma is a technology entrepreneur, financial literacy
            advocate and gender rights activist. Rachita is the CEO of Girl
            Power Talk, based in India, a purpose driven organization empowering
            today’s most capable youth with the confidence, knowledge and
            opportunity to become tomorrow’s global leaders. Her
            responsibilities include corporate communications, client
            engagement, and new business development. She leads the evaluation
            of all new potential Girl Power Talk team members and expansion into
            new markets.
          </p>
        </div>
      </div>
      <div className="about__quote"></div>
    </div>
  );
};

export default About;
