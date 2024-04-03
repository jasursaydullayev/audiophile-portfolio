import { Link, useParams } from "react-router-dom";
import { UseFetch } from "../hooks/UseFetch";
import DetailPage from "../Components/DetailPage";
import YouMay from "../Components/YouMay";
import DefaultProductsCard from "../Components/DefaultProductsCard";
import ManSection from "../Components/ManSection";
import OthersNav from "../Components/OthersNav";
import { DFD, DHR, DL, DSD, DW } from "../Components/ClassName";
function Detail() {
  const { slug } = useParams();
  const { data, error, isPending } = UseFetch(
    `http://localhost:3000/products?slug=${slug}`
  );
  console.log(error, isPending);

  return (
    <div>
      <div className={DW}>
        <OthersNav />
        <hr className={DHR} />
      </div>
      <div className={DFD}>
        <Link to={"/"} className={DL}>
          Go Back
        </Link>
        <DetailPage product={data} />
        <YouMay like={data && data[0].others} />
        <div className={DSD}>
          <DefaultProductsCard />
          <ManSection />
        </div>
      </div>
    </div>
  );
}

export default Detail;
