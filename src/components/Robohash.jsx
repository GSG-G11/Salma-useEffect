import React, { useEffect, useState } from 'react';

function Robohash() {
  const [searched, setSerched] = useState('');
  const handleInput = (e) => {
    setSerched((prev) => e.target.value);
  };

  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    const abortController = new AbortController();

    if (searched) {
      fetch(`https://robohash.org/${searched}`, {
        signal: abortController.signal,
      }).then((data) => setImageUrl(data.url));
    }

    return () => abortController.abort();
  }, [searched]);

  return (
    <div>
      <input onChange={(e) => handleInput(e)} />
      <div>{imageUrl ? <img src={imageUrl} alt="roboh" /> : null}</div>
    </div>
  );
}

export default Robohash;
