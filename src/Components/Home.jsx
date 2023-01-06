import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Navigation from "./Navigation";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState([]);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
    console.log(newBlog);
  };

  const handleFilter = (category) => {
    const newItem = blogs.filter((blog) => blog.category == category);
    setBlogs(newItem);
    console.log(newItem);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if(!res.ok){
            throw Error("could not fetch data from that resource!")
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          console.log(err.message); // this wil happen when the api server is terminated or is not connected
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);
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
