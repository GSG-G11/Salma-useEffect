import React, { useEffect, useState } from 'react';
import './profile.css';

function RandomUser() {
  const [userData, getUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const abortController = new AbortController();
    fetch('https://randomuser.me/api/', {
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((data) => {
        getUser(data.results[0]);
        setLoading(false);
      });
    return () => abortController.abort();
  }, []);
  return (
    <div>
      {loading ? (
        <span>Loading ...</span>
      ) : (
        <div className="profile">
          <div>
            <img
              className="user-image"
              src={userData.picture.medium}
              alt={userData.name.first}
            />
          </div>
          <div className="user-info">
            <p className="user-name">{`Name : s${userData.name.first}`}</p>
            <p className="user-gender">Gender:{userData.gender}</p>

            <button className="user-image" onClick={() => getUser(null)}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomUser;
