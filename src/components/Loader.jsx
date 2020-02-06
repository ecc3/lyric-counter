import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="loader">
      <h2>LOADING</h2>
      <ClipLoader color={"#4056a1"} />
    </div>
  );
};

export default Loader;
