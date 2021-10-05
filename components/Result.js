import React from "react";
import FlipMove from "react-flip-move";
// import request from "../utils/request";
import Thumbnail from "./Thumbnail";

const Result = ({ movies }) => {
  return (
    <FlipMove>
      <div className="px-5 my-10 sm:grid md:grid-cols-2  xl:grid-cols-3 3xl:flex flex-wrap">
        {movies.map((singleMovie) => {
          return <Thumbnail key={singleMovie.id} movie={singleMovie} />;
        })}
      </div>
    </FlipMove>
  );
};

export default Result;
