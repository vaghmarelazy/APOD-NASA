import React from "react";

function Main(props) {
  const { data } = props;
  return (
    <div className="imgContainer">
      <img src={data.hdurl} alt="Super nove explotion ai" className="bgImage" />
    </div>
  );
}

export default Main;
