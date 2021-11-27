import React from "react";
import Loader from "react-loader-spinner";

export default class Loading extends React.Component {
    render() {
        return (
            <div className="mt-5">
                <h1 className="mt-5 mb-5">Loading</h1>
                <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
            </div>
        )
    }
}