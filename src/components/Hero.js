import React from "react";
import { GiFoxHead } from 'react-icons/gi';


const Hero = () => {  

    return (

        <div className="h-14 fixed top-0 left-0 right-0 bg-black shadow-md z-40" id='hero'>
            <div className="flex flex-row p-1">
                <div className="p-1 m-2"><GiFoxHead size='28' color='white' /></div><div className="text-2xl w-full flex justify-center items-center p-1 text-white">FRESCO BAR</div>
            </div>
        </div>
    )
};

export default Hero;