import cssStyle from "../css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={cssStyle.footer}>
      <ul>
        <li>현재 페이지는 학습용으로 제작하였습니다.</li>
        <li>제주도 지도 이미지 출처 : 구글</li>
        <li>공공API포털 데이터 사용</li>
        <li>제주도 풍경 사진 출처 : 두루누비</li>
      </ul>
    </footer>
  );
}
