import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getGif } from "../../helpers/getGif/getGif";
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    getGif(category).then((res) => {
      setState({
        data: res,
        isLoading: false,
      });
    });
  }, [category]);

  return state;
};
useFetchGifs.propTypes = {
  category: PropTypes.string.isRequired,
};
