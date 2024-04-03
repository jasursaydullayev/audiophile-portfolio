import { Ed, Eh1, Ehr, Esd } from "../Components/ClassName";
import DefaultProductsCard from "../Components/DefaultProductsCard";
import EarphonedPage from "../Components/EarphonedPage";
import ManSection from "../Components/ManSection";
import OthersNav from "../Components/OthersNav";
function Earphones() {
  return (
    <div>
      <div className={Ed}>
        <OthersNav />
        <hr className={Ehr} />
        <h1 className={Eh1}>
          EARPHONES
        </h1>
      </div>
      <EarphonedPage />
      <div className={Esd}>
        <DefaultProductsCard />
        <ManSection />
      </div>
    </div>
  );
}

export default Earphones;
