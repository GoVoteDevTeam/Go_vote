import { InertiaLink } from "@inertiajs/inertia-react";
import styled from "styled-components";
import { Inertia } from "@inertiajs/inertia";


const ResultList = ({ vote_version }) => {
    console.log(vote_version);

    const handleVoteVersion = (id) => {
        Inertia.get("/demo_vote/result", {
            version_id: id
        })
    }


    const VoteMap = () => {
        return vote_version.map((version, id) => (
            <>
                <VersionList key={id} onClick={() => handleVoteVersion(version)}>
                    <div className="">第{version}回投票結果</div>
                </VersionList>
            </>
        ));
    };

    return (
        <>
            <ResultListPage>
                <div className="title">
                    <h1>投票結果一覧</h1>
                </div>
                <VoteMap />
            </ResultListPage>
        </>
    );
};

export default ResultList;

const ResultListPage = styled.div`
    background-color: #BDC3CD;
    width: 100%;
    height: calc(100vh - 92px - 80px);
    overflow-y: auto;
    .title {
        h1 {
            text-align: center;
        }
    }
    @media all and (min-width: 500px) {
		height: 100vh;
	}
`;

const VersionList = styled.div`
    margin: 0 auto;
    max-width: 300px;
    height: 30px;
    text-align: center;
    background-color: #fff;
    margin-bottom: 20px;
    padding: 10px;
`

