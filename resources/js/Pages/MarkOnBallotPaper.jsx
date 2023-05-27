import TmpFooter from "../components/TmpFooter";
import TmpHeader from "../components/TmpHeader";
import styled from "styled-components";
import VoteTitle from "../components/VoteTitle";

const MarkOnBallotPaper = () => {
	
	const pageInfo = {
        title: "政党別",
        info: `投票用紙を作成する`
    }

	return(
		<>
			<TmpHeader />
			<MarkOnBallotPage>
				<VoteTitle info={pageInfo} />
			</MarkOnBallotPage>
			<TmpFooter/>
		</>
	)
}

export default MarkOnBallotPaper;

const MarkOnBallotPage = styled.div`
	background-color: #BDC3CD;
	width: 100%;
	height: calc(100vh - 92px - 80px);
	overflow-y: auto;
`
