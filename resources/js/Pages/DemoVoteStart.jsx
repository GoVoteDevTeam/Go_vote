import styled from "styled-components";
import { Inertia } from "@inertiajs/inertia"
import axios from "axios";
import { InertiaLink } from "@inertiajs/inertia-react";
import Header from "../components/Header";
import TmpFooter from "../components/TmpFooter";
import { useEffect } from "react";

const DemoVote = ({ vote }) => {
	return (
		<>
			<Header />
			<DemoVoteStartPage>
                <InertiaLink href={"/demo_vote/result"} className="tmp"> 結果表示</InertiaLink>
				<div className="title">
					<h1>デモ選挙</h1>
					<p>あなたの投票が、若者の意識を変える</p>
				</div>

				<InertiaLink className="start-button" href={"/demo_vote/ballots"}>
					<div className="try-button">
						<span>TRY !</span>
					</div>
				</InertiaLink>

				<div className="date">
					<div className="election-day">
						<h3>投票日</h3>
						<p>{vote.start_date}~</p>
					</div>
					<div className="vote-counting-day">
						<h3>開票日</h3>
						<p>{vote.finish_date}</p>
					</div>
				</div>

			</DemoVoteStartPage>

			<TmpFooter />
		</>
	);
}
export default DemoVote;

const TmpHeader = styled.header`
	background-color: #36375F;
	width: 100%;
	height: 92px;
`

const DemoVoteStartPage = styled.div`
	background-color: #BDC3CD;
	width: 100%;
	height: calc(100vh - 92px - 80px);
	overflow-y: auto;

    .tmp {
        display: block;
        opacity: 0.2;
    }

    .title {
		width: 80%;
		height: 15vh;
		margin: 0 auto;
		text-align: center;
		display: block;
		padding: 100px 0px 0px 0;
		h1 {
			margin: 0;
		}
	}

    .start-button {
		text-decoration: none;
		color: #000;
		.try-button {
			width: 110px;
			height: 110px;
			border: 4px solid #000;
			background-color: #FFFFFF;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-items: center;
			transform: translate(-2px, -2px);
			box-shadow: 3px 3px 3px rgba(0, 0, 0, 1);

			span {
				color: #000;
				font-size: 20px;
				font-weight: 700;
			}

			:hover {
				transform: translate(0px, 0px);
				box-shadow: none;
			}
		}
	}

	.date {
		width: 70%;
		height: 20vh;
		margin: 50px auto;
		text-align: center;
		.election-day {
			h3 {
				margin: 30px 0 10px 0;
			}
		}
		.vote-counting-day {
			h3 {
				margin-bottom: 20px 0 10px 0;
			}
		}
	}
`;

const TmpNav = styled.nav`
	width: 100%;
	height: 80px;
	background-color: #36375F;
	position: absolute;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	ul {
		display: flex;
		list-style: none;
		li {
			color: #fff;
			margin: 0 20px;
		}
	}
`;
