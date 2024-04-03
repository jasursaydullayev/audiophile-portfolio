import Button from "./Button";
import { MAYTI, MayFI, MayH1, MayH2, MayLi, MaySI, MayUl } from "./ClassName";

type likeType = {
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  name: string;
  slug: string;
};
function YouMay({ like }: any) {
  return (
    <div>
      <h1 className={MayH1}>you may also like</h1>
      <ul className={MayUl}>
        {like &&
          like.map((el: likeType) => {
            const { image, name, slug } = el;
            return (
              <li className={MayLi} key={Math.random()}>
                <img className={MayFI} src={image.desktop} alt="" />
                <img className={MaySI} src={image.tablet} alt="" />
                <img className={MAYTI} src={image.mobile} alt="" />
                <h2 className={MayH2}>{name}</h2>
                <Button
                  bgColor="dark-brown"
                  border=""
                  borderColor=""
                  color="white"
                  hoverBg="[#FBAF85]"
                  id={slug}
                  opacity=""
                  text="SEE PRODUCTS"
                  weight="font-bold"
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default YouMay;
