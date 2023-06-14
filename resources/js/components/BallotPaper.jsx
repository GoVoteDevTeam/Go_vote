import styled from "styled-components"

const BallotPaper = ( { title }) => {
    return (
        <BallotPaperElement>
            <span>{ title }</span>
        </BallotPaperElement>
    )
}
export default BallotPaper

const BallotPaperElement = styled.div`
    width: 110px;
    height: 110px;
    border: 4px solid #000;
    background-color: #FFFFFF;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 1);
    span {
        color: #000;
        font-size: 20px;
        font-weight: 700;
    }
`
