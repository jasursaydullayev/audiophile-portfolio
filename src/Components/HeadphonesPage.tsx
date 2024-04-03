import Button from "./Button";
import { HFD, HH1, HIMG, HPFS, HSD, HTC, HTD } from "./ClassName";

function HeadphonesPage() {
  return (
    <div>
      <div className={HFD}>
        <img
          className={HIMG}
          src="/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"
          alt="product-xx99-mark-two-headphones"
          width={540}
          height={560}
        />
        <div className={HTC}>
          <p className="text-[14px] text-dark-brown  tracking-[10px] mb-[16px] mobile:mb-[24px]">
            NEW PRODUCT
          </p>
          <h1 className={HH1}>XX99 Mark II Headphones</h1>
          <p className={HPFS}>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
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
      <div className={HSD}>
        <div className={HTC}>
          <h1 className={HH1}>XX99 Mark I Headphones</h1>
          <p className={HPFS}>
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <Button
            id="xx99-mark-one-headphones"
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
          src="/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"
          alt="product-xx99-mark-two-headphones"
          width={540}
          height={560}
        />
      </div>
      <div className={HTD}>
        <img
          className={HIMG}
          src="/assets/product-xx59-headphones/mobile/image-product.jpg"
          alt="product-xx99-mark-two-headphones"
          width={540}
          height={560}
        />
        <div className={HTC}>
          <h1 className={HH1}>XX59 Headphones</h1>
          <p className={HPFS}>
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <Button
            id="xx59-headphones"
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

export default HeadphonesPage;
