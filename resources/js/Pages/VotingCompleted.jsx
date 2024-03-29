import styled from "styled-components";
import TmpFooter from "../components/TmpFooter";
import Header from "../components/Header";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { InertiaLink } from "@inertiajs/inertia-react";

const VotingCompleted = () => {
    localStorage.clear()
    return (
        <>
            <VotingCompeletedPage>
                <div className="completed">
                    <h1>デモ選挙</h1>
                    <CheckCircleIcon
                        sx={{ color: "#36375F", fontSize: "5em" }}
                    />
                    <h3>投票完了</h3>
                    <h3>開票日: 000 0000 000</h3>
                </div>
                <InertiaLink
                    className="finish-button"
                    href={"/demo_vote/start"}
                >
                    終了
                </InertiaLink>
            </VotingCompeletedPage>
        </>
    );
};

export default VotingCompleted;

const VotingCompeletedPage = styled.div`
    background-color: #bdc3cd;
    width: 100%;
    height: calc(100vh - 92px - 80px);
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgb(232, 232, 232, 0.5);
        border-radius: 10px;
    }
    .completed {
        text-align: center;
    }
    .finish-button {
        width: 40px;
        height: 40px;
        text-decoration: none;
        color: #fff;
        padding: 20px;
        background-color: #36375f;
        display: block;
        border-radius: 50%;
        margin: 100px auto 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media all and (min-width: 500px) {
		height: 100vh;
	}
`;
