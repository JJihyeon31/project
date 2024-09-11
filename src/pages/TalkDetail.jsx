import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostDetail from './../components/PostDetail';

const TalkDetail = () => {

  return (
    <div>
      <Header />
      <h1>인디토크</h1>
      <PostDetail />
      <Footer />
    </div>
  );
};

export default TalkDetail;