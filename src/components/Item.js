import React from "react";

const Item = (props) => {
    return (
        <div className="m-2 flex flex-row justify-between border-b-2 gap-x-2"> 
            <div className="flex flex-col">
                <span className="text-left text-semibold text-black text-lg font-medium">{props.nombre}</span>
                <span className="text-left text-semibold text-black text-lg font-medium">{props.traduccion}</span>
                <span className="text-left italic text-gray-900 text-sm">{props.descripcion}</span>
                <span className="text-left italic text-gray-900 text-sm">{props.descripcionTraducida}</span>
            </div>
            <div>
                <span className="text-lg text-black text-rigth">${props.precio}</span>
            </div>
        </div>
    )
}

export default Item;