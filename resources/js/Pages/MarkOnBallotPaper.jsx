import TmpFooter from "../components/TmpFooter";
import Header from "../components/Header";
import styled, { css } from "styled-components";
import VoteTitle from "../components/VoteTitle";
import { InertiaLink } from "@inertiajs/inertia-react";
import PoliticsModal from "../components/PoliticsModal";
import { useEffect, useState } from "react";

const MarkOnBallotPaper = ({ politics }) => {
    const pageInfo = {
        title: "政党別",
        info: `投票用紙を作成する`,
    };

    const year = 5;

    const [open, setOpen] = useState(false);

    const [currentPolitics, setCurrentPolitics] = useState({
        politics_id: 0,
        politics_name: "",
    });

    const handleNameClick = () => {
        // 反転
        setOpen(!open);
    };

    useEffect(() => {
        localStorage.setItem("politics", JSON.stringify(currentPolitics));
    }, [currentPolitics]);

    return (
        <>
            <MarkOnBallotPage open={open}>
                <VoteTitle info={pageInfo} />
                <div className="ballot-main-paper">
                    <div className="fiscal-year">
                        <h3>令和{year}年執行</h3>
                    </div>
                    <div className="ballot-title">
                        <h3>{pageInfo.title}デモ選挙</h3>
                    </div>
                    <div className="attention">
                        <h3>(注意)</h3>
                        <p>政党名を欄内で一つ選択することすること</p>
                    </div>
                    <div className="input-name" onClick={handleNameClick}>
                        <div className="col-title">
                            <h3>候補政党</h3>
                        </div>
                        <div className="col-input">
                            <h1>{currentPolitics.politics_name}</h1>
                        </div>
                    </div>
                    <div className="vote-button">
                        <InertiaLink href={"/demo_vote/to_vote"}>
                            投票所へ進む
                        </InertiaLink>
                    </div>
                </div>
                <PoliticsModal
                    politics={politics}
                    open={open}
                    setOpen={setOpen}
                    currentPolitics={currentPolitics}
                    setCurrentPolitics={setCurrentPolitics}
                />
            </MarkOnBallotPage>
        </>
    );
};

export default MarkOnBallotPaper;

const MarkOnBallotPage = styled.div`
    width: 100%;
    height: calc(100vh - 92px - 80px);
    overflow-y: auto;
    position: relative;

    ${({ open }) =>
        open
            ? css`
                  background-color: rgba(0, 0, 0, 0.6);
              `
            : css`
                  background-color: #bdc3cd;
                  opacity: 1;
              `}

    .ballot-main-paper {
        ${({ open }) =>
            !open
                ? css`
                      background-color: #fff;
                  `
                : css``}
        max-width: 80%;
        margin: 10px auto 30px auto;
        padding: 10px;
        .ballot-title {
            text-align: center;
            h3 {
                margin: 0;
            }
        }
        .attention {
            h3 {
                margin: 0;
            }
        }
        .input-name {
            border: 1px solid #000;
            display: flex;
            .col-title {
                padding: 10px;
                border-right: #000 solid 1px;
                writing-mode: vertical-lr;
                h3 {
                    margin: 0;
                }
            }
            .col-input {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-left: 10px;
                h1 {
                    margin: 0;
                }
            }
        }
        .vote-button {
            margin: 45px auto;
            width: 150px;
            ${({ open }) =>
                open
                    ? css`
                          display: none;
                      `
                    : css`
                          display: block;
                      `}
            a {
                padding: 20px;
                text-decoration: none;
                background-color: #36375f;
                width: 120px;
                height: 55px;
                border-radius: 20px;
                color: #fff;
                box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
                margin: 0 auto;
            }
        }
    }
    @media all and (min-width: 500px) {
        height: 100vh;
    }
`;
