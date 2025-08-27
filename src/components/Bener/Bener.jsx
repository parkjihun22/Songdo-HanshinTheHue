import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="송도역한신더휴-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '한신더휴' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '송도역한신더휴') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    하루의 무게를 내려놓는 순간, 본연으로 돌아가는 프리미엄.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    송도역 생활중심, 인천 연수의 새 주거 기준.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    NO.1 브랜드, 송도역 한신더휴 프레스턴과 함께합니다.
                </div>
            </>
        );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    인천 연수 생활권의 새 출발, 송도역 한신더휴.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    수인분당선 송도역 도보생활권, 청학역(예정) 더블역세권 기대.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    브랜드 명성과 함께 높여가는 일상의 가치.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    송도역 한신더휴 프레스턴
                </div>
            </>
        );
    } else if (text === '입지환경') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    역·학·생활 모두 가까운, 정점의 생활 인프라.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    GTX-B·월판선(예정) 호재까지, 송도역 한신더휴에서 누리세요.
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    주거의 품격과 가치를 높이는 특화 설계.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    편리한 생활을 위한 최적의 공간 설계.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    송도역 한신더휴, 송도의 핵심 입지에 찾아옵니다.
                </div>
            </>
        );
    }
};
