import React from "react";
import "./about.css";
import PressSlider from "../../components/pressSlider/PressSlider";
import aboutRachitaImage from "../../images/aboutRachitaImg.png";
import quoteContainer from "../../images/quoteContainer.png";
import quote from "../../images/quote.png";

const About = () => {
  return (
    <div className="aboutContainer">
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
              Power Talk, based in India, a purpose driven organization
              empowering today’s most capable youth with the confidence,
              knowledge and opportunity to become tomorrow’s global leaders. Her
              responsibilities include corporate communications, client
              engagement, and new business development. She leads the evaluation
              of all new potential Girl Power Talk team members and expansion
              into new markets.
            </p>
          </div>
        </div>
        <div className="about__quote"></div>
      </div>
      <div className="quote">
        <img src={quoteContainer} alt="" />
        <img src={quote} className="quote__image_1"></img>'
        <img src={quote} className="quote__image_2"></img>
        <p>
          One girl empowers another. Let’s change lives together: one girl, one
          woman and one human being at a time.
        </p>
      </div>
      <PressSlider></PressSlider>
      <div className="reviews">
        <div className="rectangle_2">
          <div className="rectangle_2_profile_cirlce"></div>
          <div className="rectangle_2__content">
            <h3>Olatowun Candide-Johnson</h3>
            <h4>Founder CEO, GAIA Africa</h4>
            <p>
              Girl Power Talk is one of the few that stand out because of its
              passion for educating young ladies and especially at the grass
              roots level and therefore changing those lives for the better. The
              organization is committed to inspiring.
            </p>
          </div>
        </div>
        <div className="rectangle_1">
          <div className="rectangle_1_profile_cirlce"></div>
          <div className="rectangle_1__content">
            <h3>Olatowun Candide-Johnson</h3>
            <h4>Founder CEO, GAIA Africa</h4>
            <p>
              Girl Power Talk is one of the few that stand out because of its
              passion for educating young ladies and especially at the grass
              roots level and therefore changing those lives for the better. The
              organization is committed to inspiring.
            </p>
          </div>
        </div>
        <div className="rectangle_2">
          <div className="rectangle_2_profile_cirlce"></div>
          <div className="rectangle_2__content">
            <h3>Olatowun Candide-Johnson</h3>
            <h4>Founder CEO, GAIA Africa</h4>
            <p>
              Girl Power Talk is one of the few that stand out because of its
              passion for educating young ladies and especially at the grass
              roots level and therefore changing those lives for the better. The
              organization is committed to inspiring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
