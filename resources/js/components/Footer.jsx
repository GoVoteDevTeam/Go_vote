import styled from "styled-components";

const Footer = () => {
    return(
        <FooterElement>
          <img className="logo" src={logo}/>
        </FooterElement>
    )
}

export default Footer;

const FooterElement = styled.footer`
        width: 100%;
        height: 100px;
        text-align: center;
        margin: 0;
        padding: 0;
        background-color: #36375f;
        
`;