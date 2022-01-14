import React from "react";

const Contacto = (props) => {

    return (
        <div className="text-center w-11/12 bg-white mt-2 pr-1 pl-1 pt-2 rounded-md shadow-md"  id='contacto'>
            <div>
                <h2>Nosotros - Us</h2>
            </div>
            <div className="flex flex-col items-center">
                {props.children}
            </div>
        </div>
    )
}

export default Contacto;