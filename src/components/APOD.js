import React, { useEffect } from "react";
import Spinner from "./Spinner/Spinner";
import useAxios from "../hooks/useAxios";
import ApodPhoto from "./Partials/ApodPhoto";

function APOD() {
    const [setUrl, data, loading, setLoading] = useAxios();

    useEffect(() => {
        setUrl(
            "https://api.nasa.gov/planetary/apod?api_key=Lc6mCmy8pmn55pfWyTeOUCytfdZvsJsUqRhtowWL",
        );
        setLoading(true);
    }, []);

    console.log(data);

    return (
        <div className="col-12">
            <h2>Astronomy Picture of the Day</h2>
            <p>
                Discover the cosmos! Each day a different image or photograph of
                our fascinating universe is featured, along with a brief
                explanation written by a professional astronomer.
            </p>
            <div className="row">
                {/* {!loading && data ? (
                    // <div className="col-10 offset-1">
                    //     <img
                    //         src={data.url}
                    //         alt="Astronomy Picture of the Day"
                    //         className="img-fluid"
                    //     />
                    //     <p>{data.explanation}</p>
                    // </div>
                ) : (
                    <Spinner />
                )} */}
                {!loading && data ? (
                    <ApodPhoto key={data.date} data={data} />
                ) : (
                    <Spinner />
                )}
            </div>
        </div>
    );
}
export default APOD;
