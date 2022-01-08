import React from "react";


const MainContent = ({children}) => {

    return (
        <div className="w-full mt-24 flex flex-col items-center">
            {children}
        </div>
    )
}

export default MainContent;