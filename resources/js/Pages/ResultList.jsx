const ResultList = ({ vote_version }) => {
    console.log(vote_version);

    const handleVoteVersion = (id) => {
        console.log(id)
    }

    const VoteMap = () => {
        return vote_version.map((version, id) => (
            <div className="versionList" key={id} onClick={() => handleVoteVersion(version)}>
                <div className="">{version}</div>
            </div>
        ));
    };

    return (
        <>
            <div className="">
                <VoteMap />
            </div>
        </>
    );
};
export default ResultList;
