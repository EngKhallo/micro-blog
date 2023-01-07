import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const BlogDetails = () => {
const { id } = useParams();
const {blogs, error, isPending} = useFetch("http://localhost:8000/blogs/" + id)

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading....</div> }
            {error && <div>{error}</div> }
            {/* <h2>Blog Details - {id}</h2> */}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <h4>Written by {blogs.author}</h4>
                    <div>{blogs.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;