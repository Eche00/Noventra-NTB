import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

function Signin() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    // password visibility
    const [visible, setVisible] = useState(false);
    // error states
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const navigate = useNavigate();

    // user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/dashboard/");
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // error switching
    const handleErrorMessage = (errorCode) => {
        switch (errorCode) {
            case "auth/invalid-email":
                return "Invalid email address format. Please check your email.";
            case "auth/user-disabled":
                return "This account has been disabled. Please contact support.";
            case "auth/user-not-found":
            case "auth/wrong-password":
                return "Invalid email or password. Please try again.";
            case "auth/too-many-requests":
                return "Too many login attempts. Please try again later.";
            case "auth/network-request-failed":
                return "Network error. Please check your internet connection.";
            default:
                return "An unexpected error occurred. Please try again.";
        }
    };

    // handling change function
    const handleChange = (e) => {
        e.preventDefault();
        // error reset
        setError("");
        setEmailError(false);
        setPasswordError(false);

        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // handle submit

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // error handling
        setError("");
        if (!formData.email.includes("@")) {
            setEmailError(true);
            return;
        } else if (formData.password.length <= 0) {
            setPasswordError(true);
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            navigate("/dashboard/");
        } catch (error) {
            console.log("LOGIN ERROR:", error.code);

            const customErrMessage = handleErrorMessage(error.code);
            setError(customErrMessage);
        } finally {

            setLoading(false);
        }
    };

    return (
        <div className=" sm:flex sm:items-center sm:justify-center min-h-screen bg-linear-to-b from-[#E0DEF7] to-[#E0DEF700]  overflow-hidden overscroll-none ">
            {/* mobile container   */}
            <main className="md:bg-white relative flex flex-col  sm:shadow-2xl   sm:rounded-2xl  sm:h-fit h-screen  sm:w-md w-full p-5 ">
                {/* logo   */}
                <div className='text-[#100A55] text-[26px] font-bold text-center'>
                    <Link to="/" className=" md:text-[42px] text-[32px] font-extrabold">ℭ</Link>EET
                </div>

                {/* subcontainer  */}
                <div className=" w-[90%] mx-auto ">
                    <h1 className=" text-center  text-black font-bold text-[20px]">
                        Welcome Back !
                    </h1>
                    {/* form container  */}
                    <form className="w-full" onSubmit={handleSubmit}>
                        {error && <p className=" text-red-500 ">{error}</p>}
                        <div className=" flex flex-col gap-[5px] my-5 ">
                            <p className="  text-black">Email:</p>
                            <div className="flex items-center gap-2 bg-transparent  border border-gray-300   w-full px-2 py-3 rounded-[10px]    text-gray-700">
                                <span className="  text-black border-r border-black   pr-2">
                                    <EmailIcon fontSize="" />
                                </span>
                                <input
                                    className="  outline-none   text-black flex-1 placeholder:text-gray-500 "
                                    type="text"
                                    name="email"
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                            </div>
                            {emailError && (
                                <p className=" text-red-500 ">email missing '@'</p>
                            )}
                        </div>
                        <div className=" flex flex-col gap-[5px] my-5 ">
                            <p className="  text-black">Password:</p>
                            <div className="flex items-center gap-2 bg-transparent  border border-gray-300   w-full px-2 py-3 rounded-[10px]    text-gray-700">
                                <span
                                    className="  text-black border-r border-black   pr-2 cursor-pointer"
                                    onClick={() => setVisible(!visible)}>
                                    {visible ? (
                                        <VisibilityIcon fontSize="" />
                                    ) : (
                                        <VisibilityOffIcon fontSize="" />
                                    )}
                                </span>
                                <input
                                    className="  outline-none   text-black flex-1 placeholder:text-gray-500 "
                                    type={visible ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                />
                            </div>
                            {passwordError && (
                                <p className=" text-red-500 ">Type in Your Password</p>
                            )}
                        </div>
                        <div className="  flex items-center gap-2.5 ">
                            <span className="flex-1 bg-gray-300  h-[0.2px] "></span>
                            <span className=" text-gray-400 ">
                                {" "}
                                <KeyboardArrowDownIcon />
                            </span>
                            <span className="flex-1 bg-gray-300  h-[0.2px] "></span>
                        </div>
                        <div className=" w-full flex items-center justify-center flex-col">
                            <button
                                className="bg-[#7065F0] w-full py-2.5 text-[12px] font-bold text-white rounded-[10px] my-2.5 cursor-pointer"
                                type="submit">
                                {loading ? (
                                    <div role="status">
                                        <svg
                                            aria-hidden="true"
                                            className="inline w-4 h-4 text-gray-200 animate-spin  fill-[#1e222b]"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill"
                                            />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                ) : (
                                    "Sign in"
                                )}
                            </button>
                        </div>
                        <p className="text-sm font-bold text-center  text-black">
                            Don't have an account ?{" "}
                            <Link to="/signup" className=" underline text-[#7065F0]">
                                Sign up
                            </Link>
                        </p>
                        <p className="text-sm font-bold text-center my-2">
                            <Link to="/forgotpassword" className="  text-[#7065F0] ">
                                Forgotten password
                            </Link>
                        </p>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Signin;
