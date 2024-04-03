import DefaultProductsCard from "../Components/DefaultProductsCard";
import HomeMainProducts from "../Components/HomeMainProducts";
import ManSection from "../Components/ManSection";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mb-[200px]">
        <DefaultProductsCard />
        <HomeMainProducts />
        <ManSection />
      </div>
    </>
  );
}

export default Home;
