import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export default function GifGrid({ category }) {
  const { data: images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInDown">{category}</h3>
      {isLoading && "Loading data..."}
      <div className="card-grid">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}
