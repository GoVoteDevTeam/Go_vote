import styled from "styled-components";
import Header from "./Header";
import Footer from "./footer";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const Layout = ({ children }) => {
    const { auth } = usePage().props;
    return (
        <LayoutCoponent>
            <Header />
            <div className="children">{children}</div>
            <Footer />
        </LayoutCoponent>
    );
};

// responsive width >= 500px
const LayoutCoponent = styled.div`
    width: 100%;
    margin: 0;
    @media all and (min-width: 500px) {
        display: flex;
        flex-direction: row-reverse; /* 横並び逆順 */
        .children {
            width: 70%;
            height: 100vh;
        }
    }
`;

export default Layout;
