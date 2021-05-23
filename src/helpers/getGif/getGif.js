export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=AoFoTkxKPHX3mXe9F5iI9sC5Ynv7cfZz`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(({ id, images, title }) => {
    return {
      id: id,
      url: images.downsized_medium.url,
      title: title,
    };
  });
  return gifs;
};
