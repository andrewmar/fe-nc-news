import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <div className="spinner">
      <h2>Loading...</h2>
      <ClipLoader color="#52bfd9" size={100} />
    </div>
  );
};

export default Spinner;
