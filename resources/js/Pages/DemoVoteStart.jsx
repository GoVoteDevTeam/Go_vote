import styled from "styled-components";
import { Inertia } from "@inertiajs/inertia"
// import axios from "axios";

const DemoVote = () => {

	const startClick = async () => {
		Inertia.get('/check-login');
	}

	return (
		<>
			<TmpHeader />

			<DemoVoteStartPage>
				<div className="title">
					<h1>デモ選挙</h1>
					<p>あなたの投票が、若者の意識を変える</p>
				</div>
				<div className="try-button" onClick={startClick}>
					<span>TRY !</span>
				</div>

				<div className="date">
					<div className="election-day">
						<h3>投票日</h3>
						<p>2023年 1月1日 6:00~</p>
					</div>
					<div className="vote-counting-day">
						<h3>開票日</h3>
						<p>2022年 1月4日 ~20:00</p>
					</div>
				</div>

			</DemoVoteStartPage>

			<TmpNav>
				<ul>
					<li>ニュース</li>
					<li>政党診断</li>
					<li>政党一覧</li>
					<li>デモ選挙</li>
				</ul>
			</TmpNav>
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

	.title {
		width: 80%;
		height: 15vh;
		margin: 0 auto;
		text-align: center;
		display: block;
		padding: 3% 0px 0px 0;
		h1 {
			margin: 0;
		}
	}

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

		cursor: pointer;

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
