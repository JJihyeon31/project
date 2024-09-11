import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostWrite from "../components/PostWrite";

const TalkWrite = () => {

  return (
    <div>
      <Header />
      <PostWrite />
      <Footer />
    </div>
  );
};

export default TalkWrite;