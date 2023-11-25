import React from "react";
import style from "../Styles/Footer.module.css";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className={style.container}>
      <div>
        <img
          className={style.logo}
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt=""
        />
      </div>
      <div className={style.heading}>
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Privacy Policy</a>
        <a href="">Sitemap</a>
      </div>
      <div>
        <h4 className={style.h1}>
          9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
        </h4>
      </div>
      <div className={style.icon}>
        <TiSocialTwitter className={style.twit} />
        <AiFillLinkedin className={style.link} />
      </div>
      <div>
        <p className={style.h1}>© 2022. Ntwist Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
