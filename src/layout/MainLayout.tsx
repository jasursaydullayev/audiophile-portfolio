import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

function MainLayout() {
  return <>
  <main className="grow">
    <Outlet />
  </main>
  <Footer />
  </>;
}

export default MainLayout;
