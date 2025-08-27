// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>송도역 한신더휴 프레스턴</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>인천광역시 연수구 청학동 96-4 일원</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 2층 ~ 지상 29층, 공동주택 8개동</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 40·59㎡ (일반분양 208세대: 40㎡·59A·59B)</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 652세대 (일반분양 208세대)</span>
        </li>
      </ul>
    ),
  },
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            송도역 생활중심과 학세권을 누리는<br />
            한신더휴 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "송도역 도보 생활권, 더블역세권 프리미엄",
      desc:
        "수인분당선 송도역 도보권<br/>청학역(예정)으로 더블역세권 기대",
    },
    {
      img: slide2,
      title: "대형 의료·건강 인프라 초근접 프리미엄",
      desc:
        "가천대길병원, 인천사랑병원 등 종합병원 인접<br/>전문의료기관·건강검진센터 접근성 우수<br/>송도·연수권 의료 네트워크로 안심 생활",
    },
    {
      img: slide3,
      title: "GTX-B·월곶~판교선(예정) 대형 교통호재",
      desc:
        "광역 철도망 확장으로 더 빨라지는 접근성<br/>미래가치 상승 기대",
    },
    {
      img: slide4,
      title: "연수·송도 생활 인프라 원스톱",
      desc:
        "백화점·대형마트·문화시설 접근 용이<br/>도시 주요 축과 연결된 편리한 생활권",
    },
    {
      img: slide5,
      title: "총 652세대 대단지, 한신더휴 브랜드",
      desc:
        "전용 40·59㎡ 중심의 합리적 구성<br/>일반분양 208세대",
    },
    {
      img: slide6,
      title: "재건축 정비사업 기반의 안정성과 미래가치",
      desc:
        "송도영남아파트 재건축 정비사업<br/>한신공영 시공, 2028년 4월 입주 예정",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HANSIN BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
