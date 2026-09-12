import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

function Layout() {

  return (
    <div className="">
      <Navbar />

      <main className="">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
