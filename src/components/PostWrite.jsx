import React, {useState} from "react";
import '../assets/css/PostWrite.css';
import { useNavigate } from 'react-router-dom';

const PostWrite = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const handleTitleChange = e => {
        setTitle(e.target.value);
    };

    const handleContentChange = e => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert('게시글 작성 성공!');
        console.log('제목:', title);
        console.log('내용:', content);
        
        setTitle('');
        setContent('');

        navigate('/talk')
    };

    return (
        <div className="write-post-container">
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <label htmlFor="title">제목</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                </div>
                <div className="form-container">
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                        required
                    />
                </div>
                <button type="submit">작성 완료</button>
            </form>
        </div>
    );
};

export default PostWrite;