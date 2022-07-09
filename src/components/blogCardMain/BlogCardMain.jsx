import React from "react";
import "./blogcardMain.css";
import blogData from "../blogCard/blogCardData.json";
import Blog_1 from "../../images/Blog_1.png";

const BlogCardMain = ({ blogNum }) => {
  return (
    <div className="blogCardMainContainer">
      <div className="blogCardMainImage">
        <img src={Blog_1} alt="" />
      </div>
      <div className="blogCardMainContent">
        <div className="blogCardMainHeadibg">
          {blogData[blogNum].blogCardHeading}
        </div>
        <div className="blogCardMainDesc">{blogData[blogNum].blogCardText}</div>
        <div className="blogCardMainDetails">
          <a href={blogData[blogNum].blogCardLink}>Read More</a>
          <p>{blogData[blogNum].blogCardDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCardMain;
