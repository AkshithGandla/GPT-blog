import React from "react";
import "./featuredArticles.css";

const FeaturedArticles = () => {
  return (
    <div>
      <div className="FeaturedArticleContainer">
        <div className="FeaturedArticleHeading"></div>
        <div className="FeaturedArticles">
          <a href="">
            <div className="FeaturedArticle FeaturedArticles_1">
              <p>
                Girl on a Mission to Bring Change in Society with her idea of
                Girl Power
              </p>
              <div className="featuredArticleicon">
                <span>Vanity Stardom</span>
              </div>
            </div>
          </a>
          <a href="">
            <div className="FeaturedArticle FeaturedArticles_2">
              <p>
                Girl on a Mission to Bring Change in Society with her idea of
                Girl Power
              </p>
              <div className="featuredArticleicon">
                <span>Shaboard</span>
              </div>
            </div>
          </a>
          <a href="">
            <div className="FeaturedArticle FeaturedArticles_3">
              <p>
                Girl on a Mission to Bring Change in Society with her idea of
                Girl Power
              </p>
              <div className="featuredArticleicon">
                <span>Document Women</span>
              </div>
            </div>
          </a>
          <a href="">
            <div className="FeaturedArticle FeaturedArticles_4">
              <p>
                Girl on a Mission to Bring Change in Society with her idea of
                Girl Power
              </p>
              <div className="featuredArticleicon">
                <span>eShe</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;
