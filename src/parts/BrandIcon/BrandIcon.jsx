/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Button from "../../elements/Button";
import emblem from "../../assets/images/logoM.png";
import style from "./BrandIcon.module.css";

export default function BrandIcon() {
  return (
    <Button
      className={style.buttonLogo}
      type="link"
      // href="/https://edu.gov.kg/"
      navLink="/https://edu.gov.kg/"
    >
      <p className={style.logoP}>
        <div className={style.containerEmblem}>
          <div>
            <img src={emblem} alt="Hero" className={style.emblem} />
          </div>

          <div className={style.mon}> МОН КР</div>
        </div>
        {/* <span className="text-theme-purple">studio</span> */}
      </p>
    </Button>
  );
}
