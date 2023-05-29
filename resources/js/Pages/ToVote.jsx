import styled from "styled-components"
import TmpHeader from "../components/TmpHeader";
import TmpFooter from "../components/TmpFooter";
import BallotPaper from "../components/BallotPaper";
import { useState } from "react";

const ToVote = () => {
    const el = document.querySelector(".elem");
    // const [isLimit, setIsLimit] = useState(false);

    const mousedown = (e) => {

        //移動時にmousemove、離れた時にmouseup関数を実行する
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        //現在地を取得
        let prevX = e.clientX;
        let prevY = e.clientY;

        // debugger;
        // mousemoveされたとき
        function mousemove (e){

            // debugger
            // X,Y座標値差 = 初期値 - 現在地点
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;

            // 現在地点を変数として取得
            var rect = el.getBoundingClientRect();

            if (rect.top >= 92 && rect.left >= 0) {
                el.style.left = rect.left - newX + "px";
                el.style.top = rect.top - newY + "px";
            } else if (rect.top < 92) {
                el.style.top = 92 + "px";
            } else if (rect.left < 0) {
                el.style.left = 0 + "px"
            }

            debugger;
            console.log(newX);

            prevX = e.clientX;
            prevY = e.clientY;
        }

        // itemからカーソルが離れた際にイベントを解除
        function mouseup () {
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
        }
    }


    return (
        <>
        <TmpHeader />
            <ToVotePage>
                <div className="elem" onMouseDown={(e)=> mousedown(e)}>
                    <BallotPaper title={"投票用紙"} />
                </div>
            </ToVotePage>
        <TmpFooter />
        </>
    )
}

export default ToVote

const ToVotePage = styled.div`
    background-color: #BDC3CD;
	width: 100%;
	height: calc(100vh - 92px - 80px);
	overflow-y: auto;
    padding-top: 20px;
    .elem {
        position: absolute;
        width: fit-content;
        margin: 0 auto;
    }
`;
