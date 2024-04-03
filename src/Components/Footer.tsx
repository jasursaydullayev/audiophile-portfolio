import { Link } from "react-router-dom";
import {
  Footer1Div,
  Footer2Div,
  Footer3Div,
  FooterHr,
  FooterLink,
  FooterP,
  FooterP2,
  FooterUl,
  FooterWrapper,
} from "./ClassName";

function Footer() {
  return (
    <div className={FooterWrapper}>
      <div className="container">
      <hr className={FooterHr} />
        <div className={Footer1Div}>
          <Link to={"/"}>
            <img
              src="/audiophile.svg"
              alt="Cite-logo-svg"
              width={143}
              height={25}
            />
          </Link>
          <ul className={FooterUl}>
            <Link to={"/"} className={FooterLink}>
              HOME
            </Link>
            <Link to={"/headphones"} className={FooterLink}>
              HEADPHONES
            </Link>
            <Link to={"/speakers"} className={FooterLink}>
              SPEAKERS
            </Link>
            <Link to={"/earphones"} className={FooterLink}>
              EARPHONES
            </Link>
          </ul>
        </div>
        <div>
          <div>
            <p className={FooterP}>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div className={Footer2Div}>
            <p className={FooterP2}>Copyright 2021. All Rights Reserved</p>
            <div className={Footer3Div}>
              <Link to={"https://facebook.com"}>
                <img
                  className="cursor-pointer"
                  src="/facebook.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link to={"https://twitter.com"}>
                <img
                  className="cursor-pointer"
                  src="/twitter.svg"
                  alt="twitter"
                  width={24}
                  height={19.5}
                />
              </Link>
              <Link to={"https://instagram.com"}>
                <img
                  className="cursor-pointer"
                  src="/instagram.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
