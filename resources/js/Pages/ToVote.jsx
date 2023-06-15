import styled from "styled-components"
import Header from "../components/Header";
import TmpFooter from "../components/TmpFooter";
import BallotPaper from "../components/BallotPaper";
import { Inertia } from "@inertiajs/inertia";
import { useRef, useState } from "react";

const ToVote = () => {

    // console.log(localStorage.getItem("politics"));
    // localStorage.clear();
    // console.log(localStorage.getItem("politics"));

    const [isLoading, setIsLoading] = useState(false);
    const el = useRef(null);
    const debounceTimer = useRef(null);
    const box_top = useRef(null);

    const touchstart = (e) => {

        //移動時にtouchmove、離れた時にtouchend関数を実行する
        window.addEventListener("touchmove", touchmove);
        window.addEventListener("touchend", touchend);

        //現在地を取得
        let prevY = e.touches[0].clientY;

        // touchmoveされたとき
        function touchmove(e) {

            // Y座標値差 = 初期値 - 現在地点
            let newY = prevY - e.touches[0].clientY;

            // 現在地点を変数として取得

            var rect = el.current.getBoundingClientRect();

            // 想定範囲外への移動を無効化
            if (rect.top >= 92) {
                el.current.style.top = rect.top - newY + "px";
            } else if (rect.top < 92) {
                el.current.style.top = 92 + "px";
            }

            if (box_top.current.getBoundingClientRect().top < el.current.getBoundingClientRect().top) {
                if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
                    if (!isLoading) {
                        setIsLoading(true);
                        clearTimeout(debounceTimer.current);
                        debounceTimer.current = setTimeout(() => {
                            Inertia.post("/demo_vote/to_vote", {
                                politics: localStorage.getItem("politics")
                            }).then(() => {
                                setIsLoading(false);
                            });
                        }, 500);
                    }
                }
            }

            prevY = e.touches[0].clientY;
        }

        // itemから指が離れた際にイベントを解除
        function touchend() {
            window.removeEventListener("touchmove", touchmove);
            window.removeEventListener("touchend", touchend);
        }
    }

    const mousedown = (e) => {

        //移動時にmousemove、離れた時にmouseup関数を実行する
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        //現在地を取得
        let prevX = e.clientX;
        let prevY = e.clientY;

        // mousemoveされたとき
        function mousemove(e) {
            // X,Y座標値差 = 初期値 - 現在地点
            let newY = prevY - e.clientY;

            // 現在地点を変数として取得
            var rect = el.current.getBoundingClientRect();

            // 想定範囲外への移動を無効化
            if (rect.top >= 92) {
                el.current.style.top = rect.top - newY + "px";
            } else if (rect.top < 92) {
                el.current.style.top = 92 + "px";
            }

            if (box_top.current.getBoundingClientRect().top < el.current.getBoundingClientRect().top) {
                if (!navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
                    if (!isLoading) { // Only if not currently loading
                        setIsLoading(true);
                        clearTimeout(debounceTimer.current);
                        debounceTimer.current = setTimeout(() => {
                            Inertia.post("/demo_vote/to_vote", {
                                politics: localStorage.getItem("politics")
                            }).then(() => {
                                setIsLoading(false);
                            });
                        }, 500);
                    }
                }
            }

            prevX = e.clientX;
            prevY = e.clientY;
        }

        // itemからカーソルが離れた際にイベントを解除
        function mouseup() {
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
        }
    }

    return (
        <>
            <Header />
            <ToVotePage>
                <div className="elem"
                    onTouchStart={(e) => touchstart(e)}
                    onMouseDown={(e) => mousedown(e)}
                    ref={el}
                >
                    <BallotPaper title={"投票用紙"} />
                </div>
                <div className="ballot-box">
                    <div className="top" ref={box_top} />
                    <div className="box">
                        スワイプして投票
                    </div>
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
        left: 50%;
        transform: translateX(-50%);
    }
    .ballot-box {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        .top {
            width: 200px;
            height: 20px;
            background-color: #000;
            border-radius: 10px;
        }
        .box {
            width: 200px;
            height: 100px;
            background-color: #BDC3CD;
            padding-top: 15px;
            text-align: center;
            font-weight: 700px;
            font-size: 1.2em;
        }
    }
`;
