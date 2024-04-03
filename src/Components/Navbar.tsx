import { Link } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";
import Drawer from "./Drawer";
import {
  NavbarFd,
  NavbarHomeFirtsDiv,
  NavbarHomeP,
  NavbarHomehr,
  NavbarLink,
  NavbarSd,
  NavbarTd,
  NavbarUl,
  Nhfd,
  Nhfh,
  Nhfp,
} from "./ClassName";

function NavbarHome() {
  return (
    <div className={NavbarHomeFirtsDiv}>
      <div className="container text-white">
        <div className={NavbarFd}>
          <div className={NavbarSd}>
            <div className={NavbarTd}>
              <Drawer />
              <Link to={"/"}>
                <img
                  src="/audiophile.svg"
                  alt="Cite-logo-svg"
                  width={143}
                  height={25}
                />
              </Link>
            </div>
            <ul className={NavbarUl}>
              <Link to={"/"} className={NavbarLink}>
                HOME
              </Link>
              <Link to={"/headphones"} className={NavbarLink}>
                HEADPHONES
              </Link>
              <Link to={"/speakers"} className={NavbarLink}>
                SPEAKERS
              </Link>
              <Link to={"/earphones"} className={NavbarLink}>
                EARPHONES
              </Link>
            </ul>
          </div>
          <Modal />
        </div>
        <hr className={NavbarHomehr} />
        <div className={Nhfd}>
          <p className={Nhfp}>NEW PRODUCT</p>
          <h1 className={Nhfh}>
            XX99 Mark II <br /> Headphones
          </h1>
          <p className={NavbarHomeP}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button
            id="xx99-mark-two-headphones"
            hoverBg=""
            opacity="hover:bg-[#FBAF85]"
            weight="font-bold"
            borderColor="none"
            text="SEE PRODUCT"
            color="white"
            bgColor="dark-brown"
            border=""
          />
        </div>
      </div>
    </div>
  );
}

export default NavbarHome;
