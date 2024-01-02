import { Outlet } from "react-router-dom";
import DivNavBar from "../DivPage/DivNavBar/DivNavBar";


const Layout = () => {
    return (
        <div>
            <DivNavBar></DivNavBar>
           <Outlet></Outlet> 
        </div>
    );
};

export default Layout;