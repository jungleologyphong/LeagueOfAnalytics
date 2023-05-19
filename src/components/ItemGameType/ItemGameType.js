/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles.css";

const ItemGameType = (props) => {
  const { typeItem } = props;
  return (
    <div className="containerItemGame">
      {typeItem === "LoL" ? (
        <div className="itemBackgroundLoL">
          <img
            src={
              "https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/name-lol.webp"
            }
            role="presentation"
            alt=""
          />
        </div>
      ) : (
        <div className="itemBackgroundTFT">
          <img
            src={
              "https://blitz-cdn.blitz.gg/blitz/ui/img/gamecover/name-tft.webp"
            }
            role="presentation"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default ItemGameType;
