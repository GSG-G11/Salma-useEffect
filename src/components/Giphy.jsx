import React, { useEffect, useState } from 'react';
function Giphy() {
  const [searched, changeinput] = useState('');
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    changeinput(e.target.value);
  };

  useEffect(() => {
    const abortController = new AbortController();

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searched}&api_key=GB2TIpB11wLmKBbNbYZ5b6F9HMYXs38a`,
      {
        signal: abortController.signal,
      }
    )
      .then((data) => data.json())
      .then((data) => {
        setImages(data.data);
      })
      .catch((err) => console.log(err));

    return () => abortController.abort();
  }, [searched]);
  console.log(images.length);
  return (
    <div>
      <input onChange={(e) => handleChange(e)} />
      <div>
        {images.map((ele) => (
          <img src={ele.images.original.url} alt="giphy" />
        ))}
      </div>
    </div>
  );
}

export default Giphy;
