import React from "react";

const Section = (props) => {

    return (
        <div className="text-center w-11/12 bg-white mt-2 pr-1 pl-1 pt-2 rounded-md shadow-md">
            <div id={props.id}>
                <h2>{props.categoria}</h2>
            </div>
            {props.children}
        </div>
    )
}

export default Section