import React from "react";

const Item = (props) => {
    return (
        <div>
            <div>
                <span>{props.nombre}</span>
            </div>
            <div>
                <span>{props.traduccion}</span>
            </div>
            <div>
                <span>${props.precio}</span>
            </div>
        </div>
    )
}

export default Item;