import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: post, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate("/");
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { post && (
            <article>
                <h2>{ post.title} </h2>
                <p>Written by { post.author } </p>
                <div>{ post.body }</div>
                <button onClick={handleClick}>delete</button>
            </article>
            )}
        </div>
    );
}
 
export default BlogDetails;