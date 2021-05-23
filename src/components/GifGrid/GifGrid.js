import React from "react";
import PropTypes from "prop-types";
import { GifGridItem } from "../GifGridItem/GifGridItem";
import { useFetchGifs } from "../../hooks/useFetchGifs/useFetchGifs";

export default function GifGrid({ category }) {
  const { data: images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeInDown">{category}</h3>
      {isLoading && <p>"Loading data..."</p>}
      <div className="card-grid">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
