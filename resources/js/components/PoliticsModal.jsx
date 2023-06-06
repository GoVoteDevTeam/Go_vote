import styled, { css } from "styled-components"

const PoliticsModal = ({ politics, open, setOpen, currentPolitics, setCurrentPolitics }) => {
    const handleExit = () => {
        setOpen(!open);
    }

    const setPolitics = (e) => {
        const politics = e.target.value;
        setCurrentPolitics(politics);
    }

    return (
        <>
            <ModalComponent open={open}>
                <div className="title">
                    候補政党一覧
                </div>
                {politics.map(
                    (item, key) => {
                        return (
                            <label htmlFor={key} key={key}>
                                <div className="politics-element"  >
                                    <input
                                        type="radio"
                                        id={key} name="politics"
                                        value={item.politics_name}
                                        onClick={(e) => setPolitics(e)}
                                    />

                                    <div className="politics-name">
                                        {item.politics_name}
                                    </div>
                                </div>
                            </label>
                        )
                    }
                )}
                <div className="exit" onClick={handleExit}>閉じる</div>
            </ModalComponent>
        </>
    )
}

export default PoliticsModal;

const ModalComponent = styled.div`
    background-color: rgba(189, 195, 205, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 85%;
    height: calc(94vh - 92px - 80px);
    transform: translate(-50%, -50%);
    overflow-y: auto;
    padding-bottom: 15px;

    /* stateのopenに応じて、表示非表示を判定 */
    ${({ open }) => open ? css`
        visibility: visible;
        ` : css`
        visibility: hidden;
    `}

    .title {
        width: 100%;
        text-align: center;
        padding: 20px 0;
        font-size: 2em;
        font-weight: 600px;
        padding-bottom: 0;
    }

    label {
        width: 100%;
        .politics-element {
            background-color: #fff;
            padding: 20px 10px;
            margin: 10px;
            display: flex;
            align-items: center;
            box-shadow: 0px 10px 20px -13px rgba(0, 0, 0, 0.8);
            -moz-box-shadow: 0px 10px 20px -13px rgba(0, 0, 0, 0.8);
            -webkit-box-shadow: 0px 10px 20px -13px rgba(0, 0, 0, 0.8);
            -ms-box-shadow: 0px 10px 20px -13px rgba(0, 0, 0, 0.8);
        }
    }

    .exit {
        width: 100px;
        height: 20px;
        border-radius: 20px;
        margin: 0 auto;
        background-color: #36375F;
        color: #fff;
        text-align: center;
        padding: 10px;
    }
`
