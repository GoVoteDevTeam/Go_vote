import styled, { css } from "styled-components"

const PoliticsModal = ( { politics, open, setOpen}) => {
    const handleExit = () => {
        setOpen(!open);
    }

    return (
        <>
            <ModalComponent open={open}>
                <div className="title">
                    候補政党一覧
                </div>
                {politics.map(
                    (item, key) =>{
                        return (
                            <div className="politics-element" key={key}>
                                <div className="icon" />
                                <div className="politics-name">
                                    {item.politics_name}
                                </div>
                            </div>
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
    }
    .politics-element {
        background-color: #fff;
        padding: 10px;
        margin: 10px;
        display: flex;
        align-items: center;
        .icon {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 20px;
            background-color: #36375F;
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
