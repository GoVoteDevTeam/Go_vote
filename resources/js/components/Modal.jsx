import React, { useState } from "react";
import styled from "styled-components";

const Modal = ({ Politics_data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <ModalWrap>
        <input
          type="radio"
          id={`modal-${Politics_data.name}`}
          className="modal__input"
          name="modal-trigger"
          checked={isOpen}
          onChange={handleModal}
        />
        <label htmlFor={`modal-${Politics_data.name}`} className="modal__trigger">
          {Politics_data.catchcopy}
        </label>
        <label htmlFor={`modal-${Politics_data.name}`} className="modal__trigger_datail">
          {Politics_data.datail}
        </label>

        {isOpen && (
          <div className="modal__overlay" onClick={handleModal}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
              <div className="nameModal">{Politics_data.name}</div>
              <div className="iconModal">
                <img className="img" src={`./img/${Politics_data.img}`} />
              </div>
              <div className="detailModal">{Politics_data.datail}</div>
              <button className="modal__close" onClick={handleModal}>
              ×
              </button>
            </div>
          </div>
        )}
      </ModalWrap>
    </>
  );
};

export default Modal;

const ModalWrap = styled.div`
    .modal__input {
        display: none;
    }

    .modal__trigger {
        font-size: 1.5rem;
        cursor: pointer;
        /* margin: auto 0; */
    }
    .modal__trigger_datail {
        font-size: 1rem;  //効かない
        cursor: pointer;
        margin: auto 0;
    }

    .modal__overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        .modal__content {
            background-color: #fefefe;
            border-radius: 5px;
            padding: 20px;
            max-width: 650px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            .iconModal{
                    background-color:#eaff4c;
                    border-radius: 50%;
                    height: 120px;
                    width: 120px;
                    margin:0px auto;
                    margin-bottom: 30px;
                    .img{
                        border-radius:50%;
                        height: 120px;
                        width: 120px;
                        border: solid 4px #ff6347;  //白で見にくかったからborder付けただけ。
                    }
                }
            .modal__close {
                position: absolute;
                top: -18px;
                right: -18px;
                cursor: pointer;
                background-color: #777;
                color: #fff;
                border: 2px solid #fff;
                border-radius: 20px;
                width: 36px;
                height: 36px;
                line-height: 1.5;
                font-size: 1.4em;
            }
        }
    }
    @media only screen and (max-width: 640px) {
    .modal__trigger_datail {
        font-size: calc(2rem - 1rem);
        white-space: pre-wrap;
    }

    .modal__trigger_datail{
        display: none;
    }
}
`;
