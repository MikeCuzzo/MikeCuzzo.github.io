import React from "react";

export const Bio = props => {
    console.log(props);
    return <div className="container">
        <p>{props.bio}</p>
    </div>
}