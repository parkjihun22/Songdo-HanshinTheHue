import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText:
      "미래가치를 높여주는<br />한강시네폴리스",
    contentText:
      "송도 한강시네폴리스 개발구역 내 최적의 입지, 미래의 교통망과 상업·업무 중심지로 발전하는 지역<br />한강과 인접한 독보적인 프리미엄 브랜드",
  },
  {
    img: section2Image2,
    titleText: "차량 10분 내 대형병원 인접<br />의세권을 누릴 수 있는 프리미엄",
    contentText:
      "송도시의 의료 인프라를 책임지는 대형병원들이 인근에 위치하여<br />의료 서비스 접근성이 뛰어난 프리미엄 생활",
  },
  {
    img: section2Image3,
    titleText: "어디든 빠르게 연결되는<br />광역 교통망 프리미엄",
    contentText:
      "서울 및 수도권 주요 지역으로의 빠른 이동이 가능하며, 향후 개통 예정인 GTX-D 노선과 송도공항과의 연결이 편리한 교통망",
  },
  {
    img: section2Image4,
    titleText:
      "학교, 쇼핑, 병원, 문화를 더 가까이<br />SMART 인프라",
    contentText:
      "송도시청, 대형 쇼핑몰, 문화시설 등 다양한 생활 인프라가 가까워 생활의 편리함을 더한 스마트한 인프라",
  },
  {
    img: section2Image5,
    titleText: "1,029세대 송도역 한신더휴br />첫 번째 브랜드 프리미엄",
    contentText: "총 1,029세대 규모로<br />한강시네폴리스의 중심에서 누리는 프리미엄 브랜드와<br />입주민 편의를 위한 다양한 시설 제공",
  },
  {
    img: section2Image6,
    titleText:
      "편리한 생활에 더해지는<br />쾌적한 자연환경",
    contentText:
      "단지 주변으로 펼쳐지는 한강변 자연경관과, 수변공원 등<br />쾌적한 주거 환경을 제공하는 공간",
  },
];


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>송도역 한신더휴 프레스턴- 입지환경</title>
        <meta
          name="description"
          content="송도역 한신더휴 프레스턴의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 김해의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다"
        />
        <meta
          name="keywords"
          content="송도역 한신더휴 프레스턴, 송도역 한신더휴"
        />
        <link
          rel="canonical"
          href="https://hangboggift.kr/LocationEnvironment/intro"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="송도역 한신더휴 프레스턴- 입지환경"
        />
        <meta
          property="og:description"
          content="송도역 한신더휴 프레스턴의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 김해의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다"
        />
        <meta
          property="og:image"
          content="https://hangboggift.kr/Main1.png"
        />
        <meta
          property="og:url"
          content="https://hangboggift.kr/LocationEnvironment/intro"
        />
        <meta property="og:site_name" content="송도역 한신더휴 프레스턴" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="송도역 한신더휴 프레스턴- 입지환경"
        />
        <meta
          name="twitter:description"
          content="송도역 한신더휴 프레스턴의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 김해의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다"
        />
        <meta
          name="twitter:image"
          content="https://hangboggift.kr/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://hangboggift.kr/LocationEnvironment/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
										{
											"@context": "https://schema.org",
											"@type": "WebPage",
											"name": "송도역 한신더휴 프레스턴- 입지환경",
											"description": "송도역 한신더휴 프레스턴의 입지 정보를 확인하세요. 뛰어난 교통망, 생활 인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 김해의 중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다",
											"url": "https://hangboggift.kr/LocationEnvironment/intro"
										}
										`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        송도역 한신더휴 프레스턴- 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        송도역 한신더휴 프레스턴의 입지 정보를 확인하세요. 뛰어난 교통망, 생활
        인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 김해의
        중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
      </p>

      <div className={styles.textBox}>
        <div>갈수록 완벽해질 송도역 한신더휴 </div>
        <div>도시를 압도할 자부심</div>
      </div>

      <img
        src={page1}
        className={styles.image2}
        alt="송도역 한신더휴 프레스턴입지환경 이미지"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 송도역 한신더휴 프레스턴 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
