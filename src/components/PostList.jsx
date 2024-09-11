import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/PostList.css";
import "../assets/css/Pagination.css";
import Pagination from "react-js-pagination";
import axios from "axios";

const PostList = () => {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const postsPerPage = 5;

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber);
    }

    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePostClick = (id) => {
        navigate(`/talk/${id}`);
    };

    const handleWriteButtonClick = () => {
        navigate('/write');
    };

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            const formattedPosts = response.data.map(post => ({
                ...post,
                date: new Date().toLocaleDateString(),
                hits: Math.floor(Math.random() * 100)
            }));
            setPosts(formattedPosts);
        })
        .catch(error => {
            console.error("Error : ", error);
            setError("게시물을 불러오는 도중 오류가 발생했습니다.");
            setLoading(false);
        });
    }, []);

    return (
        <div className="post-table-container">
            <div className="post-table">
                <table>
                    <thead>
                        <tr>
                            <th>글번호</th>
                            <th>제목</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map((post) => (
                            <tr key={post.id} onClick={() => handlePostClick(post.id)}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>        
                                <td>{post.date}</td>
                                <td>{post.hits}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="pagination">
                    <Pagination 
                        activePage={page}
                        itemsCountPerPage={postsPerPage}
                        totalItemsCount={posts.length}
                        pageRangeDisplayed={5}
                        prevPageText={"<"}
                        nextPageText={">"}
                        onChange={handlePageChange}
                        />
                </div>
                <div className="btn-container">
                    <button className="write-btn" onClick={handleWriteButtonClick}>글쓰기</button>
                </div>
            </div>
        </div>
    )
}
export default PostList;