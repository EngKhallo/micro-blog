import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing",
      author: "Mario",
      id: 1,
    },
    {
      title: "Welcome Party",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing",
      author: "John",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing",
      author: "Mario",
      id: 3,
    },
  ]);
  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
    console.log(newBlog);
  };

  useEffect(() => {}, []);
  return (
    <div className="home">
      
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />{" "}
      {/* passed a parent value data to a child */}
    </div>
  );
};

export default Home;
