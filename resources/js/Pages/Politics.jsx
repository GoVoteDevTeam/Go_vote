import styled from "styled-components";

const Politics = () => {

    return (
        <>
            <HeaderElement>

            </HeaderElement>
            <PoliticsPage>
                <div className="title">
                    政党早見表
                </div>
                <div className="political_party">
                    <div className="item"></div>
                    <div class="modal-001__wrap">
                        <input type="radio" id="modal-001__open" class="modal-001__open-input" name="modal-001__trigger"/>
                        <label for="modal-001__open"  class="modal-001__open-label">モーダルを開く</label>
                        <input type="radio" id="modal-001__close" name="modal-001__trigger"/>
                        <div class="modal-001">
                            <div class="modal-001__content-wrap">
                                {/* <label for="modal-001__close" class="modal-001__close-label">×</label> */}
                                <div class="modal-001__content">ここにモーダルの中身が入ります。ここにモーダルの中身が入ります。<br/>ここにモーダルの中身が入ります。ここにモーダルの中身が入ります。<br/>ここにモーダルの中身が入ります。ここにモーダルの中身が入ります。</div>
                            </div>
                            <label for="modal-001__close">
                                <div class="modal-001__background"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </PoliticsPage>
        </>
    )

}

export default Politics;

const HeaderElement = styled.header`
    width: 100%;
    height: 92px;
    background-color: #36375F;
    margin-bottom: 100px;
`;

const PoliticsPage = styled.div`
    width: 100%;
    height: calc(100vh - 200px);
    background-color: #36375F;
    border-radius: 10px 10px 0 0;
    .title {
        padding: 10px;
        text-align: center;
        color: #fff;
    }
    .political_party{
        display: flex;
    }
    .item{
        width: 20%;
        height: 100px;
        /* margin-right: 10px; */
        margin-left: 10px;
        background-color: #ffffffc3;
    }
    .item2{
        width: 80%;
        height: 100px;
        margin-right: 10px;
        /* margin-left: 10px; */
        background-color: #fff;
    }
    .modal-001__wrap {
        display: flex;
        justify-content: center;
        /* text-align: center; */
        width: 80%;
        height: 100px;
        margin-right: 10px;
        /* margin-left: 10px; */
        background-color: #fff;
    }

    .modal-001__wrap input {
        display: none;
    }

    /* .modal-001__open-label,
    .modal-001__close-label {
        display: table-cell;
        vertical-align: middle;
    } */

    /* .modal-001__open-label {
        color: #4f96f6;
        font-size: .95em;
    } */

    /* .modal-001__open-label:hover {
        text-decoration: underline;
        cursor: pointer;
        color: #c7511f;
    } */

    .modal-001 {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: none;
    }

    .modal-001__open-input:checked + label + input + .modal-001 {
        display: block;
        animation: modal-001-animation .6s;
    }

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
    }

    /* .modal-001__close-label {
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
    } */

    .modal-001__content {
        max-height: 50vh;
        overflow-y: auto;
        padding: 39px 45px 40px;
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
