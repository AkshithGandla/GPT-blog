import React from "react";
import "./blogCard.css";
import blogData from "./blogCardData.json";
import Blog_1 from "../../images/Blog_1.png";

const BlogCard = ({ blogNum }) => {
  return (
    <div>
      <div className="blogCardContainer">
        <div className="blogCardImage">
          <img src={Blog_1} alt="" />
        </div>
        <div className="blogCardContent">
          <div className="blogCardHeadibg">
            {blogData[blogNum].blogCardHeading}
          </div>
          <div className="blogCardDesc">{blogData[blogNum].blogCardText}</div>
          <div className="blogCardDetails">
            <a href={blogData[blogNum].blogCardLink}>Read More</a>
            <p>{blogData[blogNum].blogCardDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
