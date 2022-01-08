import React from "react";

const Section = (props) => {

    return (
        <div className="text-center m-3">
            <div id={props.id}>
                <h2>{props.categoria}</h2>
            </div>
            {props.children}
        </div>
    )
}

export default Section