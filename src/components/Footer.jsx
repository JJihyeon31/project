import React from "react";

const Footer = (props) => {
  return (
    <footer id="footerType" className={`footer__wrap ${props.element}`}>
      <h2 className="blind">푸터 영역</h2>
      <div className="footer__inner container">
        <div className="footer__menu">
          <div>
            <h3>사이트</h3>
            <ul>
              <li>
                <a href="/">사이트 1</a>
              </li>
              <li>
                <a href="/">사이트 2</a>
              </li>
              <li>
                <a href="/">사이트 3</a>
              </li>
              <li>
                <a href="/">사이트 4</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>소통 마당</h3>
            <ul>
              <li>
                <a href="/">자유게시판</a>
              </li>
              <li>
                <a href="/">자기소개</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>공연장</h3>
            <ul>
              <li>
                <a href="/">슬라이드 유형01</a>
              </li>
              <li>
                <a href="/">슬라이드 유형01</a>
              </li>
            </ul>
          </div>
          <div>
            <h3></h3>
            <ul>
              <li>
                <a href="/">이미지 유형01</a>
              </li>
              <li>
                <a href="/">이미지 유형02</a>
              </li>
              <li>
                <a href="/">이미지/텍스트 유형01</a>
              </li>
              <li>
                <a href="/">이미지/텍스트 유형01</a>
              </li>
              <li>
                <a href="/">텍스트 유형01</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>카드 유형</h3>
            <ul>
              <li>
                <a href="/">카드 유형01</a>
              </li>
              <li>
                <a href="/">카드 유형02</a>
              </li>
              <li>
                <a href="/">카드 유형03</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>마이 페이지</h3>
            {/* <ul>
              <li>
                <a href="/">푸터 메뉴 유형01</a>
              </li>
              <li>
                <a href="/">푸터 컨택트 유형02</a>
              </li>
              <li>
                <a href="/">푸터 이메일 유형03</a>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="footer__right">
          2024 FDW. Make Music Great Again
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
