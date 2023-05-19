/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles.css";

const Sidebar = () => {
  return (
    <div className="containerSidebar">
      <img className="logo" src={require("../../assets/images/logo.png")} />
      <button>
        <img
          className="logoItem"
          src={require("../../assets/images/home32.png")}
        />{" "}
        Home
      </button>
      <button>
        <img
          className="logoItem"
          src={require("../../assets/images/home32.png")}
        />{" "}
        Overlays
      </button>
      <button>
        <img
          className="logoItem"
          src={require("../../assets/images/home32.png")}
        />{" "}
        Game Guides
      </button>
      <button>
        <img
          className="logoItem"
          src={require("../../assets/images/home32.png")}
        />{" "}
        Areana
      </button>
    </div>
  );
};

export default Sidebar;
