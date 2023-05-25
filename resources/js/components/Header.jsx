import styled from "styled-components";
import logo from "../../../public/logo.png"


const Header = () => {
    return(
        <HeaderElement>
          <img className="logo" src={logo}/>
        </HeaderElement>
    )
}

export default Header;

const HeaderElement = styled.header`
        width: 100%;
        height: 100px;
        text-align: center;
        margin: 0;
        padding: 0;
        background-color: #36375f;
        .logo {
          height: 100px;
        }
        
`;