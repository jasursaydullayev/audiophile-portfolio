import { BsArrowRightCircleFill } from "react-icons/bs";
import DefaultProductsCard from "./DefaultProductsCard";
import { DrawerD, DrawerH, DrawerW, DrawerW2, DrawerW3 } from "./ClassName";

function Drawer() {
  return (
    <div className={DrawerW}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer">
          <img
            className="cursor-pointer"
            src="/tablet-burger.svg"
            alt="tablet-burger"
            width={16}
            height={15}
          />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className={DrawerW2}>
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
            <div className={DrawerW3}>
              <h4 className={DrawerH}>Close</h4>
              <div className="text-[24px]">
                <BsArrowRightCircleFill />
              </div>
            </div>
          </label>
          <div className={DrawerD}>
            <DefaultProductsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
