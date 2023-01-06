import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import BlogList from "./BlogList";
import Navigation from "./Navigation";

const Home = () => {
  const {blogs, isPending, error, setBlogs} = useFetch("http://localhost:8000/blogs");

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
    console.log(newBlog);
  };

  const handleFilter = (category) => {
    const newItem = blogs.filter((blog) => blog.category == category);
    // setBlogs(newItem);
    console.log(newItem);
  };

  
  return (
    <div className="home">
      {error && <div>{error}</div> }
      {isPending && <div>Loading ...</div>}
      <Navigation blogs={blogs} handleFilter={handleFilter} />
      <BlogList
        blogs={blogs}
        title="All Blogs"
        handleDelete={handleDelete}
      />{" "}
      {/* passed a parent value data to a child */}
    </div>
  );
};

export default Home;
