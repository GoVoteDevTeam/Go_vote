import { Inertia } from "@inertiajs/inertia";

const Login = ({ auth }) => {
    const mockUserData = {
        email: "test@testtest.com",
        password: "test",
    }

    const onFinish = () => {
        console.log("ログイン機能未発火")
    }

    const handleLogin = () => {
        Inertia.post("/login", mockUserData, {onFinish})
    }

    console.log(auth);
    
    return (
        <>
            <div onClick={handleLogin}>ログインを完了させる</div>
        </>
    )
}

export default Login;
