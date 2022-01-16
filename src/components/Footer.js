import React from "react";

const Footer = () => {
    return (
        <div className="absolute bottom-0 left-0 text-center w-full h-24 bg-white mt-2 pr-1 pl-1 pt-2" >
            <div className="flex justify-center w-full p-1">
                <span>FRESCO BAR © {new Date().getFullYear()}</span>
            </div>
        </div>
    )
}

export default Footer;