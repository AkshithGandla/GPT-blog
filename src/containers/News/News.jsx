import React from "react";
import "./news.css";
import newsData from "./NewsData.json";
import news1 from "../../images/news1.png";
import news2 from "../../images/news2.png";
import news3 from "../../images/news3.png";
const News = () => {
  return (
    <div>
      <div className="newsDiv">
        <div className="newsMain">
          <div className="newsMainImg">
            <img src={newsData[0].NewsCardimg}></img>
          </div>
          <div className="newsMainContent">
            <h2>{newsData[0].NewsCardHeading}</h2>
            <p>{newsData[0].NewsCardText}</p>
          </div>
        </div>

        <div className="subNewsDiv">
          <div className="subnews_1">
            <div className="subnews_1__img">
              <img src={newsData[1].NewsCardimg}></img>
            </div>
            <div className="subnews_1__content">
              <h2>{newsData[1].NewsCardHeading}</h2>
              <p>{newsData[1].NewsCardText}</p>
            </div>
          </div>
          <div className="subnews_1">
            <div className="subnews_1__img">
              <img src={newsData[2].NewsCardimg}></img>
            </div>
            <div className="subnews_1__content">
              <h2>{newsData[2].NewsCardHeading}</h2>
              <p>{newsData[2].NewsCardText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
