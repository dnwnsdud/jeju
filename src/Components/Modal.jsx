import cssStyle from "../css/Modal.module.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";

const cancel = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
  </svg>
);

export default function Modal({ closeModal, matchedItems }) {
  let apiList = useSelector((a) => a.apiData);
  console.log(apiList);
  let linkList = useSelector((a) => a.linkData);
  const [selectedItem, setSelectedItem] = useState(matchedItems[0]); // matchedItems[0] 첫번째 배열값을 초기값으로 설정

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={cssStyle.modal}>
      <div className={cssStyle.listmodal}>
        {matchedItems.map((item, i) => (
          <p
            key={item.rnum}
            onClick={() => handleItemClick(item)}
            className={item === selectedItem ? cssStyle.on : ""}
          >
            {item.title}
          </p>
        ))}
      </div>

      {selectedItem && (
        <article className={cssStyle.cardmodal}>
          <div className={cssStyle.textArea}>
            <h2>{selectedItem.title}</h2>
            <ul>
              <li>거리 : {selectedItem.extent} Km</li>
              <li>코스 경로 : {selectedItem.medium}</li>
              <li>소요시간 : {selectedItem.time}</li>
              <li>코스소개 :{selectedItem.description}</li>
              {selectedItem.state &&
                (selectedItem.state == "어려움" ||
                selectedItem.state == "매우어려움" ? (
                  <li>
                    난이도 :
                    <span style={{ color: "red" }}>{selectedItem.state}</span>
                  </li>
                ) : selectedItem.state == "쉬움" ||
                  selectedItem.state == "매우쉬움" ? (
                  <li>
                    난이도 :
                    <span style={{ color: "var(--gray3)" }}>
                      {selectedItem.state}
                    </span>
                  </li>
                ) : (
                  <li>난이도 :{selectedItem.state}</li>
                ))}
              <li>필요시설 :{selectedItem.subDescription}</li>
              <li className={cssStyle.btn}>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.durunubi.kr/4-2-1-1-walk-mobility-view-detail.do?crs_idx=T_CRS_MNG0000001285#map",
                      "_blank"
                    )
                  }
                >
                  지도정보 보러가기
                </button>
              </li>
              {["7", "25", "26", "35"].includes(selectedItem.rnum) && (
                <li>해당지역은 자전거를 이용할 수 없어요</li>
              )}
            </ul>
          </div>
          <div className={cssStyle.wrapper}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
          </div>
        </article>
      )}

      <button
        className={cssStyle.cancel}
        onClick={() => {
          closeModal();
        }}
      >
        {cancel}
      </button>
    </div>
  );
}
