import { ManDiv, ManH2, ManImg, ManP } from "./ClassName";

function ManSection() {
  return (
    <div className={ManDiv}>
      <div className="1060:text-center">
        <h2 className={ManH2}>
          Bringing you the <div className="1060:hidden"></div>
          <strong className="font-semibold text-dark-brown">best</strong> audio
          gear
        </h2>
        <p className={ManP}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        className="1060:hidden"
        src="/man.png"
        alt="a man image"
        width={540}
        height={588}
      />
      <img
        className={ManImg}
        src="/man-tablet.png"
        alt="a man image"
      />
    </div>
  );
}

export default ManSection;
