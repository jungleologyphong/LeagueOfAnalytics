import React from "react";
import ItemGameType from "../ItemGameType/ItemGameType";
import "./styles.css";

const TheContent = () => {
  return (
    <div className="containerTheContent">
      <input
        className="inputSearch"
        placeholder="Search profiles, champions, agents, legends, and more!"
      />
      <div className="containerItem">
        <ItemGameType typeItem={'LoL'} />
        <ItemGameType typeItem={'TFT'}/>
      </div>
    </div>
  );
};

export default TheContent;
