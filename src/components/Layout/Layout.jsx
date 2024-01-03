import { Outlet } from "react-router-dom";
import DivNavBar from "../DivPage/DivNavBar/DivNavBar";
import Footer from "../Footer/Footer";


const Layout = () => {
    return (
        <div>
            <DivNavBar></DivNavBar>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Layout;