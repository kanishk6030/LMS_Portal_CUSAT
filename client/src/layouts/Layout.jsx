
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
        <Outlet />
        <Footer />
      </div>
  );
}

export default Layout;
