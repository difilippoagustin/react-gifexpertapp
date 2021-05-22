import React, { useState } from "react";
import { AddCategorie } from "./components/AddCategorie";
import GifGrid from "./components/GifGrid";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Simpsons"]);

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
// AoFoTkxKPHX3mXe9F5iI9sC5Ynv7cfZz
