import React, { useEffect } from "react";

function ApodPhoto({ data }) {
    console.log(data);
    console.log(data.url);

    useEffect(() => {
        console.log(data);
    }, [data]); // Log data

    return (
        <div className="col-10 offset-1">
            <img
                src={data.url}
                alt="Astronomy Picture of the Day"
                className="img-fluid"
            />
            <p>{data.explanation}</p>
        </div>
    );
}

export default ApodPhoto;
