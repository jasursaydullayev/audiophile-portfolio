import { Link } from "react-router-dom";
import Modal from "./Modal";
import Drawer from "./Drawer";
import {
  NavbarFd,
  NavbarLink,
  NavbarSd,
  NavbarTd,
  NavbarUl,
} from "./ClassName";
function OthersNav() {
  return (
    <div className="">
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
      </div>
    </div>
  );
}

export default OthersNav;
