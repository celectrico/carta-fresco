import React from "react";

const Section = (props) => {

    return (
        <div>
            <div>
                <h2>{props.categoria}</h2>
            </div>
            {props.children}
        </div>
    )
}

export default Section