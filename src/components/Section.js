import React from "react";

const Section = (props) => {
    console.log(props.id)

    return (
        <section id={props.id} className="text-center w-11/12 bg-white mt-2 pr-1 pl-1 pt-2 rounded-md shadow-md">
            <div>
                <h2 className="text-2xl font-bold underline">{props.categoria}</h2>
            </div>
            {props.children}
        </section>
    )
}

export default Section