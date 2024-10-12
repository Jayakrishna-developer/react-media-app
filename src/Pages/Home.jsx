import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Add from '../Components/Add';
import Category from '../Components/Category';
import View from '../Components/View';

function Home() {
  const [uploadVideoResponse, setUploadVideoResponse] = useState({});
  const [dropvideoResponse, setDropVideoResponse] = useState({});

  return (
    <div>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse} />
        </div>
        <Link
          to="./watch-history"
          style={{ textDecoration: "none", color: "#2c3e50" }}
        >
          <i
            className="fa-solid fa-history"
            style={{ color: "#4d96b6", marginRight: "0.5rem" }}
          ></i>
          Watch History
        </Link>
      </div>

      <div className="container-fluid w-100 mt-5 mb-5 row">
        <div className="n"></div>
        <div
          style={{ marginBottom: "200px" }}
          className="all-videos col-lg-8 col-md-12 col-sm-12 col-12"
        >
          <h1>All videos</h1>
          <View
            uploadVideoResponse={uploadVideoResponse}
            setDropVideoResponse={setDropVideoResponse}
          />
        </div>
        <div className="col-1"></div>
        <div className="all-videos col-lg-3 col-md-11 col-sm-3 col-11">
          <Category dropvideoResponse={dropvideoResponse} />
        </div>
      </div>
    </div>
  );
}

export default Home;
