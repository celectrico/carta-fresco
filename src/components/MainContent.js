import React from "react";

const MainContent = ({children}) => {

    return (
        <div className="w-full h-full my-14 pt-4 flex flex-col items-center bg-gradient-to-b from-black to-white z-20 relative">
            {children}
        </div>
    )
}

export default MainContent;