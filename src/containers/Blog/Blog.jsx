import React from "react";
import "./blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import BlogCardMain from "../../components/blogCardMain/BlogCardMain";
const Blog = () => {
  var blogs = [];

  for (var i = 1; i < 4; i++) {
    blogs.push(
      <div>
        <BlogCard key={i} blogNum={i} />
      </div>
    );
  }
  return (
    <div className="BlogsSectionContainer" id="blog">
      <div className="BlogsTitle">Blogs by Rachita</div>
      <div>
        <BlogCardMain key={0} blogNum={0} />
      </div>
      <div className="blogs">{blogs}</div>
    </div>
  );
};

export default Blog;
