import Button from "./Button";
import { HFD, HH1, HIMG, HSD, HTC, SFP, SSP } from "./ClassName";

function SpeakersPage() {
  return (
    <div className="container">
      <div className={HFD}>
        <img
          className={HIMG}
          src="/assets/product-zx9-speaker/mobile/image-product.jpg"
          alt="product-xx99-mark-two-headphones"
          width={540}
          height={560}
        />
        <div className={HTC}>
          <p className="text-[14px] text-dark-brown  tracking-[10px] mb-[16px] mobile:mb-[24px]">
            NEW PRODUCT
          </p>
          <h1 className={HH1}>
            ZX9 <br /> SPEAKER
          </h1>
          <p className={SFP}>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity -
            creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Button
            id="zx9-speaker"
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
      <div className={HSD}>
        <div className="928:text-center">
          <h1 className={HH1}>
            ZX7 <br /> SPEAKER
          </h1>
          <p className={SSP}>
            Stream high quality sound wirelessly with minimal loss. The ZX7
            bookshelf speaker uses high-end audiophile components that
            represents the top of the line powered speakers for home or studio
            use.
          </p>
          <Button
            id="zx7-speaker"
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
        <img
          className={HIMG}
          src="/assets/product-zx7-speaker/mobile/image-product.jpg"
          alt="product-xx99-mark-two-headphones"
          width={540}
          height={560}
        />
      </div>
    </div>
  );
}

export default SpeakersPage;
