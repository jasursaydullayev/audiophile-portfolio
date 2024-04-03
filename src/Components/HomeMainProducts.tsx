import { Link } from "react-router-dom";
import Button from "./Button";
import {
  HomeBtn,
  HomeFirstDiv,
  HomeH2,
  HomeImg,
  HomeP,
  HomeSecondDiv,
  HomeThirdDiv,
  HomeWrapper,
} from "./ClassName";

function HomeMainProducts() {
  return (
    <div className={HomeWrapper}>
      <div className={HomeFirstDiv}>
        <img
          className={HomeImg}
          src="/zx9-speaker.png"
          alt="zx9-speaker"
          width={410}
          height={493}
        />
        <div>
          <h2 className={HomeH2}>
            ZX9 <br /> SPEAKER
          </h2>
          <p className={HomeP}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={"/detail/product/zx9-speaker"}>
            <button className={HomeBtn}>SEE PRODUCT</button>
          </Link>
        </div>
      </div>
      <div className={HomeSecondDiv}>
        <h4 className="font-bold text-[28px] tracking-[2px] mb-[32px] ">
          ZX7 SPEAKER
        </h4>
        <Link to={"/detail/product/zx7-speaker"}>
          <Button
            id="zx7-speaker"
            hoverBg="hover:bg-[#000]"
            opacity="hover:text-white"
            weight="font-bold"
            bgColor="none"
            borderColor="border-black"
            border="border-2"
            color="black"
            text="SEE PRODUCT"
          />
        </Link>
      </div>
      <div className="grid grid-cols-2 564:grid-cols-1 gap-[30px] tablet:gap-[11px]">
        <img
          className="h-[320px] 564:h-[200px]"
          src="/yx1-earphones.png"
          alt=""
          width={640}
          height={320}
        />
        <div className={HomeThirdDiv}>
          <h4 className="font-bold text-[28px] tracking-[2px] mb-[32px]">
            YX1 EARPHONES
          </h4>
          <Link to={"/detail/product/yx1-earphones"}>
            <Button
              id="yx1-earphones"
              hoverBg="hover:bg-[#000]"
              opacity="hover:text-white"
              weight="font-bold"
              bgColor="none"
              borderColor="border-black"
              border="border-2"
              color="black"
              text="SEE PRODUCT"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeMainProducts;
