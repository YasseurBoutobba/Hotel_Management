import { useDispatch } from "react-redux";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import { setUserName, signIn } from "../redux/slices/authSlice";
const Login = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({email : "", password: ""})
    const handleEmailChange = (e) => {
        setUser({...user, email: e.target.value})
    }
    const handlePasswordChange = (e) => {
        setUser({...user, password: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setUserName(user.email))
        dispatch(signIn(user))
        console.log("signed in")
    }
    return (
        <div className=" w-[100dvw] h-[100dvh] bg-primaryGrey/60 flex justify-center items-center">
            <form className=" flex flex-col gap-4 bg-gray-50 rounded-md py-4 px-8 items-center" onSubmit={handleSubmit} >
            <h1>log in</h1>
            <CustomInput placeholder="Email" value={user.email} onChnge={handleEmailChange} type="email" required={true} />
            <CustomInput placeholder="Password" value={user.password} onChnge={handlePasswordChange} type="password" required={true} />
            <button className=" bg-primaryBlue text-gray-50 px-4 py-2 rounded-[5px] text-lg ">Log In</button>
            </form>
        </div>
    )}

    export default Login;