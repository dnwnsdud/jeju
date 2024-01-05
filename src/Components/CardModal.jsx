import cssStyle from "../css/CardModal.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { useSelector } from "react-redux";
import { useState } from "react";

const cancel = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
  </svg>
);

export default function CardModal({ selectedItem, close }) {
  SwiperCore.use([Autoplay]);

  const num = "r" + selectedItem.rnum;
  const linkList = useSelector((a) => a.linkData);
  const lList = linkList.find((a) => a.linkId === num);
  const url = lList.url;
  const imgList = lList.img;

  return (
    <article className={cssStyle.cardmodal}>
      <button
        className={cssStyle.cancel}
        onClick={() => {
          close();
        }}
      >
        {cancel}
      </button>
      <div className={cssStyle.textArea}>
        <h2>{selectedItem.title}</h2>
        <ul>
          <li>거리 : {selectedItem.extent} Km</li>
          <li>코스 경로 : {selectedItem.medium}</li>
          <li>소요시간 : {selectedItem.time}</li>
          <li className={cssStyle.desc}>
            코스소개 :{selectedItem.description}
          </li>
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
            <button onClick={() => window.open(`${url}`, "_blank")}>
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
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          {imgList.map((img) => {
            return (
              <SwiperSlide>
                <img src={'/jeju'+img} alt="배경사진" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </article>
  );
}
