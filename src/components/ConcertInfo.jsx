import React from "react";
import { useNavigate } from "react-router-dom";
import events from "./Data";
import "../assets/css/ConcertList.css"

function ConcertInfo() {

    const navigate = useNavigate();

    const handleDetailsClick = (id) => {
        navigate(`/concertinfo/${id}`);
    };

    if (events.length === 0) {
        return (
            <div className="list-container">
                <h2>전체 공연 목록</h2>
                <p>등록된 공연이 없습니다.</p>
            </div>
        );
    }

    return (
        <div className="list-container">
                <h2>전체 공연 목록</h2>
                <div className="list">
                    {events.map(event => (
                        <div key={event.id} className="card">
                            <img src={event.imageUrl} alt="대표 이미지 준비 중" />
                            <div className="card-info">
                                <h3>{event.title}</h3>
                                <p>{event.date}</p>
                                <p>{event.place}</p>
                            </div>
                            <div className="card-button">
                                <button onClick={() => handleDetailsClick(event.id)}>자세히 보기</button>
                            </div>
                        </div>    
                    ))}
                </div>
            </div>
    )
};

export default ConcertInfo;