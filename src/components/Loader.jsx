import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="loader">
      <h2>LOADING</h2>
      <ClipLoader />
    </div>
  );
};

export default Loader;
