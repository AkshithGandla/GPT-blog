import React from "react";
import "./aboutGPT.css";
import aboutGPTGradient from "../../images/aboutGPTGradient.png";
import aboutGPTImg from "../../images/aboutGPTImg.png";

const AboutGPT = () => {
  return (
    <div className="aboutGPT">
      <div className="aboutGPT__images">
        <img className="aboutGPTImg" src={aboutGPTImg} alt="" />
        <img className="aboutGPTGradient" src={aboutGPTGradient} alt="" />
      </div>
      <div className="aboutGPT__content">
        <h2>About Girl Power Talk</h2>
        <p>
          Girl Power Talk strives to inspire girls with persistence, empathy,
          and confidence. We empower young Women, Men Non-Binary with
          merit-based opportunities to grow and achieve their full potential.
          Our mission, in collaboration with our sister company Blue Ocean
          Global Technology, is to develop girls in India to become global
          leaders. We are relentlessly committed to education, gender equality,
          and integrating the strengths of specially abled communities. We
          celebrate the diverse talents of each individual. <br />
          <br />
          Through our nurturing culture of learning and mentorship, we instill
          young people with exceptional soft-skills, technical knowledge, and
          purpose in life. We provide a platform to share the voices and stories
          of girls and women across India. #GirlPowerTalk “One girl empowers
          another. Let’s change lives together: one girl, one woman and one
          human being at a time.”
        </p>
      </div>
    </div>
  );
};

export default AboutGPT;
