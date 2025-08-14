import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    // { title: "59A", key: "59A" },
    { title: "84A", key: "84A" },
    { title: "84B", key: "84B" },
    { title: "99B", key: "99B" },
  ];

  const vrUrls = {
    // "59A": "https://www.prugio.com/hb/2025/onecluster/vr/59a.html",
    "84A": "https://opus-switzen.com/vr/84a.html",
    "84B": "https://opus-switzen.com/vr/84b.html",
    "99B": "https://opus-switzen.com/vr/99b.html",
  };

  const [selectedType, setSelectedType] = useState("84A");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <title>송도역 한신더휴 프레스턴- E-모델하우스</title>
        <meta name="description" content="송도역 한신더휴 프레스턴의 E-모델하우스를 온라인으로 편리하게 둘러보세요." />
        <meta name="keywords" content="송도역 한신더휴 프레스턴, 송도역 한신더휴, E-모델하우스, 온라인모델하우스" />
        <link rel="canonical" href="https://hangboggift.kr/FloorPlan/Emodel" />
        <meta property="og:title" content="송도역 한신더휴 프레스턴- E-모델하우스" />
        <meta property="og:description" content="송도역 한신더휴 프레스턴의 E-모델하우스를 온라인으로 편리하게 둘러보세요." />
        <meta property="og:image" content="https://hangboggift.kr/Main1.png" />
        <meta property="og:url" content="https://hangboggift.kr/FloorPlan/Emodel" />
        <meta property="og:site_name" content="송도역 한신더휴 프레스턴" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="송도역 한신더휴 프레스턴- E-모델하우스" />
        <meta name="twitter:description" content="송도역 한신더휴 프레스턴의 E-모델하우스를 온라인으로 편리하게 둘러보세요." />
        <meta name="twitter:image" content="https://hangboggift.kr/Main1.png" />
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>송도역 한신더휴 프레스턴- E-모델하우스 안내</h1>

      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
