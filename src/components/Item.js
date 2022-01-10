import React from "react";

const Item = (props) => {
    return (
        <div className="m-2 flex flex-row justify-between"> 
            <div className="flex flex-col">
                <span className="text-left">{props.nombre}</span>
                <span className="text-left italic text-gray-800">{props.traduccion}</span>
            </div>
            <div>
                <span className="text-rigth">${props.precio}</span>
            </div>
        </div>
    )
}

export default Item;