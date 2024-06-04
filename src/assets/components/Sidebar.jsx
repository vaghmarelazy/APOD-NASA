import React from "react";

function Sidebar(props) {
  const { setModel, handleToggleModel, data } = props;
  return (
    <div className="sidebar">
      <div onClick={handleToggleModel} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p className="context">{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModel}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
