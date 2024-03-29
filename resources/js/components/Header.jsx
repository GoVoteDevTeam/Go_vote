import styled from "styled-components";
import logo from "../../../public/logo.png";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import myicon from "../../../public/myicon.png";

const Header = () => {
    const { auth } = usePage().props;

    const navchange = () => {
        console.log(auth);
        if (!auth) {
            console.log(true);
            return (
                <InertiaLink href="/login" className="icon">
                    <div className="none-icon"></div>
                </InertiaLink>
            );
        } else {
            return (
                <InertiaLink href="/mypage" className="icon">
                    <img className="myicon" src={myicon} />
                </InertiaLink>
            );
        }
    };

    return (
        <HeaderElement>
            <div className="logo-container">
                <img className="logo" src={logo} />
            </div>

            <div className="icon-container">{navchange()}</div>
        </HeaderElement>
    );
};

export default Header;

const HeaderElement = styled.header`
    width: 100%;
    height: 92px;
    position: relative;
    text-align: center;
    align-items: center;
    margin: 0;
    padding: 0;
    background-color: #36375f;
    display: flex;
    .logo-container {
        width: 100%;
        text-align: center;
        position: absolute;
        .logo {
            height: 100px;
        }
    }

    .icon-container {
        width: 100%;
        position: absolute;
    }
    .icon {
        width: 50px;
        height: 50px;
        padding: 0;
        border-radius: 50%;
        .myicon {
            float: right;
        	margin-right: 15px;
			width: 50px;
            height: 50px;
            padding: 0;
            border-radius: 50%;
        }
        .none-icon {
            float: right;
       		margin-right: 15px;
			width: 50px;
            height: 50px;
            padding: 0;
            border-radius: 50%;
            background-color: white;
        }
    }
    @media all and (min-width: 500px) {
        width: 10%;
        height: 100vh;
        align-items: start;
        .logo-container {
            .logo {
                display: none;
				
            }
        }
        .icon {
            .myicon {
				margin-top: 10px;
				margin-right: 0;
                float: none;
            }
            .none-icon {
                float: none;
				margin: 10px auto;
            }
        }
    }
`;
