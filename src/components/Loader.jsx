import React from "react";

function Loader() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div
                className="w-12 h-12 border-4 border-t-[#7065F0] border-gray-200 rounded-full animate-spin"
            ></div>
        </div>
    );
}

export default Loader;
