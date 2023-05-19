import styled from "styled-components";

const Modal = () => {
    return(
        <>
            <ModalWrap>
                <div className="modal-001__wrap">
                    <input type="radio" id="modal-001__open" className="modal-001__open-input" name="modal-001__trigger"/>
                    <label htmlFor="modal-001__open" className="modal-001__open-label">開く</label>
                    <input type="radio" id="modal-001__close" name="modal-001__trigger"/>
                    <div className="modal-001">
                        <div className="modal-001__content-wrap">
                            {/* <label htmlFor="modal-001__close" className="modal-001__close-label">×</label> */}
                            <div className="modal-001__content">
                                <div className="nameModal">自民党</div>
                                <div className="iconModal"></div>
                                <div className="detailModal">自民党は日本の主要政党で、経済重視、保守主義、安全保障強化、憲法改正、社会保障政策などを重視する党です。</div>
                            </div>
                        </div>
                        <label htmlFor="modal-001__close">
                            <div className="modal-001__background"></div>
                        </label>
                    </div>
                </div>
            </ModalWrap>
        </>
    )
}

export default Modal;

const ModalWrap = styled.header`
.modal-001__wrap {
    display: flex;
    justify-content: center;
    height: 100px;
    input {
        display: none;
    }
    .modal-001__open-input:checked + label + input + .modal-001 {
        display: block;
        animation: modal-001-animation .6s;
    }
    .modal-001 {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: none;
        .modal-001__content-wrap {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            max-width: 650px;
            background-color: #fefefe;
            z-index: 2;
            border-radius: 5px;
            .modal-001__close-label {
                background-color: #777;
                color: #fff;
                border: 2px solid #fff;
                border-radius: 20px;
                width: 36px;
                height: 36px;
                line-height: 1.5;
                text-align: center;
                display: table-cell;
                position: fixed;
                top: -15px;
                right: -2%;
                z-index: 99999;
                font-size: 1.4em;
            }
            .modal-001__content {
                max-height: 50vh;
                overflow-y: auto;
                padding: 39px 45px 40px;
                .nameModal{
                    text-align: center;
                    margin-bottom: 15px;
                    font-size: 35px;
                }
                .iconModal{
                    background-color:#eaff4c;
                    border-radius: 50%;
                    height: 120px;
                    width: 120px;
                    margin:0px auto;
                    margin-bottom: 30px;
                }
            }
        }
        .modal-001__background {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .45);
            z-index: 1;
        }
    }
}
@keyframes modal-001-animation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

@media only screen and (max-width: 520px) {
    .modal-001__open-label {
        max-width: 90%;
        padding: .94em 2.1em .94em 2.6em;
    }

    /* .modal-001__close-label {
        top: -17px;
        right: -4%;
    } */

    .modal-001__content-wrap {
        width: 90vw;
    }

    .modal-001__content {
        padding: 33px 21px 35px;
        max-width: 100%;
    }
}
`;