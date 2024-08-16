import React, { useState } from "react";
import events from "./Data";
import "../assets/css/ConcertDetail.css"; // css

// 동시렌더링 수정
function ConcertDetail({eventId, onClose}) {
    const event = events.find(event => event.id === eventId);

    if (!event) {
        return <p>공연 정보를 찾을 수 없습니다.</p>;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="detail-container">
                    <div className="detail-img">
                        <img src={event.imageUrl} alt={event.title} />
                    </div>
                    <div className="detail-info">
                        <h2>{event.title}</h2>
                        <p><strong>날짜:</strong> {event.date}</p>
                        <p><strong>장소:</strong> {event.place}</p>
                        <button className="location">위치 확인</button>
                        <button onClick={onClose} className="back-button">닫기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConcertDetail;