import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import events from "./Data";
import "../assets/css/ConcertDetail.css"; // css
function ConcertDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const event = events.find(event => event.id === parseInt(id));

    if (!event) {
        return <p>공연 정보를 찾을 수 없습니다.</p>;
    }

    return (
        <div className="detail-container">
            <div className="detail-img">
                <img src={event.imageUrl} alt={event.title} />
            </div>
            <div className="detail-info">
                <h2>{event.title}</h2>
                <p><strong>날짜:</strong> {event.date}</p>
                <p><strong>장소:</strong> {event.place}</p>
                <button className="location">위치 확인</button>
                <button onClick={() => navigate(-1)} className="back-button">목록으로 돌아가기</button>
            </div>
        
        </div>
    );
}

export default ConcertDetail;