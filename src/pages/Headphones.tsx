import { Eh1, Ehr, Hsd, Hwd } from "../Components/ClassName";
import DefaultProductsCard from "../Components/DefaultProductsCard";
import HeadphonesPage from "../Components/HeadphonesPage";
import ManSection from "../Components/ManSection";
import OthersNav from "../Components/OthersNav";

function Headphones() {
  return (
    <div>
     <div className={Hwd}>
     <OthersNav />
     <hr className={Ehr} />
        <h1 className={Eh1}>
          HEADPHONES
        </h1>
     </div>
      <div className="container">
        <HeadphonesPage />
      </div>
      <div className={Hsd}>
        <DefaultProductsCard />
        <ManSection />
      </div>
    </div>
  );
}

export default Headphones;
