import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../assets/css/PostDetail.css";

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            setPost(response.data);
        })
        .catch(error => {
            console.error("Error : ", error);
        });
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="post-container">
            <div className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        </div>
    );
};

export default PostDetail;