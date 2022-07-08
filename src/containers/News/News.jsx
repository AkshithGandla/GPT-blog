import React from "react";
import "./news.css";
import news1 from "../../images/news1.png";
import news2 from "../../images/news2.png";
import news3 from "../../images/news3.png";
const News = () => {
  return (
    <div>
      <div className="newsDiv">
        <div>
          <img src={news1}></img>
        </div>
        <div className="subNewsDiv">
          <img src={news2}></img>
          <img src={news3}></img>
        </div>
      </div>
    </div>
  );
};

export default News;
