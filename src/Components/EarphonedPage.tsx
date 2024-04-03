import Button from "./Button";
import { EFP, EH1, ESP, HFD, HIMG, HTC } from "./ClassName";

function EarphonedPage() {
  return (
    <div className="container">
      <div className={HFD}>
        <img
          className={HIMG}
          src="/assets/product-yx1-earphones/mobile/image-product.jpg"
          alt="product-xx99-mark-two-headphones"
          width={540}
          height={560}
        />
        <div className={HTC}>
          <p className={EFP}>NEW PRODUCT</p>
          <h1 className={EH1}>
            YX1 WIRELESS <br /> EARPHONES
          </h1>
          <p className={ESP}>
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <Button
            id="yx1-earphones"
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

export default EarphonedPage;
