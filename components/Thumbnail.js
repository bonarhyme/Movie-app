import React from "react";
import Image from "next/image";
import Result from "./Result";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = ({ movie }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className="group cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50 p-5 ">
      <Image
        src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}`}
        layout="responsive"
        height={1000}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{movie.overview}</p>
        <h2 className="mt-1 text-2xl group-hover:font-bold transition-all duration-100 ease-in-out ">
          {movie.title || movie.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {movie.media_type && `${movie.media_type} .`}{" "}
          {movie.release_date || movie.first_air_date}.{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
