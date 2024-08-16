import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConcertInfo from "../components/ConcertInfo";

const Info = () => {
  return (
    <div>
      <Header />
      {/* <h1>공연 정보</h1> */}
      <ConcertInfo />
      <Footer />
    </div>
  );
};

export default Info;
