import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  DefaultProductsCardH5,
  DefaultProductsCardLi,
  DefaultProductsCardUl,
} from "./ClassName";
function DefaultProductsCard() {
  return (
    <ul className={DefaultProductsCardUl}>
      <li className={DefaultProductsCardLi}>
        <img
          className="mt-[-90px] tablet:w-[79px] tablet:h-[104px] tablet:mt-[-52px]"
          src="/default-product-1.png"
          alt="default-products-1"
          width={122}
          height={160}
        />
        <h5 className={DefaultProductsCardH5}>HEADPHONES</h5>
        <div className="flex gap-[13px] items-center">
          <Link
            className="hover:text-dark-brown text-[13px] font-bold tracking-[1px] opacity-50"
            to={"/headphones"}
          >
            Shop
          </Link>
          <RiArrowRightSLine className="text-dark-brown" />
        </div>
      </li>
      <li className={DefaultProductsCardLi}>
        <img
          className="mt-[-80px] tablet:w-[84px] tablet:h-[101px] tablet:mt-[-50px]"
          src="/default-product-2.png"
          alt="default-products-1"
          width={121}
          height={146}
        />
        <h5 className={DefaultProductsCardH5}>SPEAKERS</h5>
        <div className="flex gap-[13px] items-center">
          <Link
            to={"/speakers"}
            className="hover:text-dark-brown text-[13px] font-bold tracking-[1px] opacity-50"
          >
            Shop
          </Link>
          <RiArrowRightSLine className="text-dark-brown" />
        </div>
      </li>
      <li className={DefaultProductsCardLi}>
        <img
          className="mt-[-63px] tablet:w-[103px] tablet:h-[104px] tablet:mt-[-52px]"
          src="/default-product-3.png"
          alt="default-products-1"
          width={125}
          height={126}
        />
        <h5 className={DefaultProductsCardH5}>EARPHONES</h5>
        <div className="flex gap-[13px] items-center">
          <Link
            to={"/earphones"}
            className="hover:text-dark-brown text-[13px] font-bold tracking-[1px] opacity-50"
          >
            Shop
          </Link>
          <RiArrowRightSLine className="text-dark-brown" />
        </div>
      </li>
    </ul>
  );
}

export default DefaultProductsCard;
