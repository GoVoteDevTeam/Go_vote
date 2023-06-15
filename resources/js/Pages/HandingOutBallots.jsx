import { InertiaLink } from "@inertiajs/inertia-react";
import TmpFooter from "../components/TmpFooter";
import Header from "../components/Header";
import VoteTitle from "../components/VoteTitle";
import styled from "styled-components";

const HandingOutBallots = ({ auth }) => {

    const pageInfo = {
        title: "yourvote",
        info: `${auth.user_name}様に交付されている投票用紙`
    }

    const mockVoteVersion = [
        {
            name: "政党別選挙",
            href: "/demo_vote/party_based_election"
        },
        {
            name: "政策別選挙",
            href: "/demo_vote/policy_based_election"
        }
        
    ];

    return (
        <>
            <Header />
            <HandingOutBallotsPage>
                <VoteTitle info={pageInfo} />
                <div className="votable-items">
                    {mockVoteVersion.map((item, index) => (
                        <InertiaLink href={item.href} key={index}>
                            <div className="votable-item">
                                <h3>{item.name}</h3>
                            </div>
                        </InertiaLink>
                    ))}
                </div>
            </HandingOutBallotsPage>
            <TmpFooter />
        </>
    )
}

export default HandingOutBallots;

const HandingOutBallotsPage = styled.div`
    background-color: #BDC3CD;
    width: 100%;
    height: calc(100vh - 92px - 80px);
    overflow-y: auto;
    .votable-items {
        width: 100%;
        a {
            text-decoration: none;
            color: #000;
            .votable-item {
                margin: 10px auto;
                padding: 10px;
                text-align: center;
                background-color: white;
                width: 60%;
                box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
            }
        }

    }
`;
