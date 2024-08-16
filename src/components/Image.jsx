import React from "react";

const Image = (props) => {
  return (
    <section id="imageType" className={`imageType__wrap ${props.element}`}>
      <h2>{props.title}</h2>
      <p>임시 문장입니다.</p>
      <div className="image__inner container">
        <article className="image img1">
          <h3 className="image__title">FDW가 추천하는 공연</h3>
          <p className="image__desc">
            홍대거리는 90년대 중후반 이후 인디 음악가들과 인디 밴드들의 메카나
            다름없는 장소로서 그 명성답게 공연장 명소들이 즐비해 있는 지역이다.
          </p>
          <a className="image__btn" href="/">
            자세히 보기
          </a>
        </article>
        <article className="image img2">
          <h3 className="image__title">홍대 공연장</h3>
          <p className="image__desc">
            홍대 공연장의 역사를 따라가면 언더그라운드 밴드들과 오버그라운드
            밴드들의 역사를 전부 꿰뚫을 수 있을 정도다. 그리고 클럽마다 장르와
            분위기가 각양각색이라 모던 록 중심의 사운드홀릭 등 각자의 개성 있는
            분위기 또한 묘미다.
          </p>
          <a className="image__btn yellow" href="/">
            자세히 보기
          </a>
        </article>
      </div>
    </section>
  );
};

export default Image;
