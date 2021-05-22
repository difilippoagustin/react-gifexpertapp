import { useEffect, useState } from "react";
import { GetGif } from "../helpers/GetGif";
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    GetGif(category).then((res) => {
      setState({
        data: res,
        isLoading: false,
      });
    });
  }, [category]);

  return state;
};
