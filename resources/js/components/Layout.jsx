import Header from "./Header";
import Footer from "./footer";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const Layout = ({ children }) => {
    const { auth } = usePage().props;
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
