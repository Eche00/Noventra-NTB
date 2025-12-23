import { AssuredWorkload } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

function Loader({ showSignin }) {
    return (
        <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-blue-700/50">

            <div className="flex items-center justify-center gap-4 bg-linear-to-b from-blue-700/30 to-white max-w-[420px] w-full rounded-3xl  p-4 py-6 text-center">

                <div>
                    <AssuredWorkload fontSize="large" className="text-blue-700" />
                </div>


                {/* Spinner */}
                <section className="flex items-center justify-center gap-2">
                    <div className="h-8 w-8 border-x-5 border-blue-700 rounded-full  animate-spin mx-auto"></div>
                    <div className="h-8 w-8 border-x-5 border-blue-700 rounded-full  animate-spin mx-auto"></div>
                    <div className="h-8 w-8 border-x-5 border-blue-700 rounded-full  animate-spin mx-auto"></div>
                    <div className="h-8 w-8 border-x-5 border-blue-700 rounded-full  animate-spin mx-auto"></div>
                </section>

                <div>
                    <AssuredWorkload fontSize="large" className="text-blue-700" />
                </div>
            </div>
            {showSignin &&
                <p className="text-white">Please <Link to='/signin' className=" text-blue-700 underline"> Signin</Link> to continue !</p>
            }
        </div>
    );
}

export default Loader;
