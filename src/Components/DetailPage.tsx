// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment } from "../redux/features/cartSlice";
import {
  DB,
  DCFD,
  DCH1,
  DCSD,
  DF,
  DFEP,
  DFH1,
  DFP,
  DFSP,
  DSCD,
  DSP,
  DTD,
  DTP,
  ED,
  IP,
  QP,
  RD,
} from "./ClassName";
type objElements = {
  category: string;
  categoryImage: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  description: string;
  features: string;
  gallery: {
    first: {
      destkop: string;
      mobile: string;
      tablet: string;
    };
    second: {
      destkop: string;
      mobile: string;
      tablet: string;
    };
    third: {
      destkop: string;
      mobile: string;
      tablet: string;
    };
  };
  id: string;
  isnew: boolean;
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  includes: [
   {
      quantity: number,
      item: string
    },
  ];
  name: string;
  others: object[];
  price: number;
  slug: string;
};
function DetailPage({ product }: any) {
  // const { amount } = useSelector((store) => store.products);
  // const dispatch = useDispatch();

  if (!product) {
    return (
      <div className="loader z-30 text-white">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return product.map((prod: objElements) => {
    const {
      category,
      categoryImage,
      description,
      features,
      gallery,
      id,
      image,
      includes,
      isnew,
      name,
      others,
      price,
      slug,
    } = prod;
    console.log(others, slug, category, categoryImage);

    return (
      <div key={id} className="mt-[56px]">
        <div className={DCFD}>
          <img
            className="rounded-lg tablet:hidden tsy:w-[300px]"
            src={image.desktop}
            alt="product-xx99-mark-two-headphones"
            width={540}
            height={560}
          />
          <img
            className="rounded-lg hidden tablet:block mobile:hidden"
            src={image.tablet}
            alt="product-xx99-mark-two-headphones"
            width={281}
            height={480}
          />
          <img
            className="rounded-lg hidden mobile:block"
            src={image.mobile}
            alt="product-xx99-mark-two-headphones"
            width={327}
            height={327}
          />
          <div>
            <p className={DFP}>{isnew ? "NEW PRODUCT" : ""}</p>
            <h1 className={DFH1}>{name}</h1>
            <p className={DSP}>{description}</p>
            <p className={DTP}>${price.toLocaleString("en-US")}</p>
            <div className="flex items-center gap-[16px]">
              <div className={DCSD}>
                <button
                  // disabled={amount == 1 ? true : false}
                  // onClick={() => dispatch(decrement(product[0]))}
                  className="cursor-pointer opacity-25 text-[15px] font-bold"
                >
                  -
                </button>
                <p className="text-[15px] font-bold">0</p>
                <button
                  // onClick={() => dispatch(increment(product[0]))}
                  className="opacity-25 text-[15px] font-bold"
                >
                  +
                </button>
              </div>
              <button className={DB}>ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className={DTD}>
          <div>
            <h1 className={DF}>FEATURES</h1>
            <p className={DFEP}>{features.slice(0, 353)}</p>
            <p className={DFSP}>{features.slice(354)}</p>
          </div>
          <div className={DSCD}>
            <h1 className={DCH1}>IN THE BOX</h1>
            <div className="tablet:mt-[12px]">
              {includes.map((el: any) => {
                return (
                  <div key={Math.random()} className={RD}>
                    <p className={QP}>{el.quantity}x</p>
                    <p className={IP}>{el.item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={ED}>
          <div>
            <img
              className="rounded-xl mb-[32px] tablet:hidden"
              src={gallery.first.destkop}
              alt=""
              width={445}
              height={280}
            />
            <img
              className="rounded-xl mb-[32px] hidden tablet:block mobile:hidden"
              src={gallery.first.tablet}
              alt=""
              width={277}
              height={174}
            />
            <img
              className="rounded-xl mb-[32px] hidden mobile:block"
              src={gallery.first.mobile}
              alt=""
            />
            <img
              className="rounded-xl tablet:hidden"
              src={gallery.second.destkop}
              alt=""
              width={445}
              height={280}
            />
            <img
              className="rounded-xl hidden tablet:block mobile:hidden"
              src={gallery.second.tablet}
              alt=""
              width={277}
              height={174}
            />
            <img
              className="rounded-xl hidden mobile:block"
              src={gallery.second.mobile}
              alt=""
            />
          </div>
          <img
            className="rounded-xl 1172:hidden"
            src={gallery.third.destkop}
            alt=""
            width={635}
            height={592}
          />
          <img
            className="rounded-xl hidden 1172:block 600:hidden"
            src={gallery.third.tablet}
            alt=""
            width={395}
            height={368}
          />
        </div>
      </div>
    );
  });
}

export default DetailPage;
