import DefaultProductsCard from "../Components/DefaultProductsCard";
import ManSection from "../Components/ManSection";
import OthersNav from "../Components/OthersNav";
import SpeakersPage from "../Components/SpeakersPage";

function Speakers() {
  return (
    <div>
      <div className="mb-[154px] pb-[97px] bg-[url(/all-nav-bg.png)] bg-center mobile:mb-[40px] text-white tablet:mb-[96px] mobile:pb-[32px]">
        <OthersNav />
        <hr className="w-full bg-white h-[1px] opacity-20 mb-[98px] 928:mb-[65px] mobile:min-w-[356px] mobile:ml-[-16px] mobile:mb-[32px]" />
        <h1 className="text-[40px] tracking-[1.43px] font-bold text-center mobile:text-[28px] mobile:tracking-[2px]">
          SPEAKERS
        </h1>
      </div>
      <SpeakersPage />
      <div className="container mb-[160px] mobile:mb-[120px]">
        <DefaultProductsCard />
        <ManSection />
      </div>
    </div>
  );
}

export default Speakers;
