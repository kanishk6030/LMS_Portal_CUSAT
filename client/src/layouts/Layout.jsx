
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import NavbarResizable from "../components/NavbarResizable";

function Layout() {
  return (
    
      <div className=""
        style={{
            backgroundColor:'white'
        }}>
       
        <NavbarResizable />
        <div className="nav-wrapper w-full h-[8vh] bg-[#0a0a0a]"></div>
        <Outlet />
        <Footer />
      </div>
  );
}

export default Layout;
