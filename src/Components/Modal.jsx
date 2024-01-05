import cssStyle from "../css/Modal.module.css";
import { useState } from "react";

import CardModal from "./CardModal";

const cancel = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
  </svg>
);

export default function Modal({ closeModal, matchedItems }) {
  const [selectedItem, setSelectedItem] = useState(matchedItems[0]); // matchedItems[0] 첫번째 배열값을 초기값으로 설정
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsopen(true);
  };
  const [Modal, setModal] = useState(true);
  const [isOpen, setIsopen] = useState(false);
  const close = () => {
    setIsopen(false);
  };

  return (
    <div className={cssStyle.modal}>
      <div className={cssStyle.listmodal}>
        {matchedItems.map((item, i) => (
          <p
            key={item.rnum}
            onClick={() => {
              handleItemClick(item);
              setModal(false);
            }}
          >
            {item.title}
          </p>
        ))}
      </div>

      {isOpen && selectedItem && (
        <CardModal selectedItem={selectedItem} close={close} />
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
