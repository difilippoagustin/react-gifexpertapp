import React, { useState } from "react";
import { AddCategorie } from "../AddCategorie/AddCategorie";
import GifGrid from "../GifGrid/GifGrid";
export const GifExpertApp = ({ defaultCategories = [] }) => {
  // const [categories, setCategories] = useState(["Simpsons"]);
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategorie setCategories={setCategories} />
      <ul>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ul>
    </>
  );
};
