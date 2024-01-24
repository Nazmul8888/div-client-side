import { Link } from "react-router-dom";
// import DivContainer from "../../Hooks/DivContainer";
import logo from '../../../assets/logo/logo.png'


const DivNavBar = () => {
    const navLinks = <>

     <li><Link to='/'>HOME</Link></li>
     <li><Link to='/INDUSTRIES'>INDUSTRIES</Link></li>
     <li><Link to='/PRODUCTS'>PRODUCTS</Link></li>
     <li><Link to='/SERVICES'>SERVICES</Link></li>
     <li><Link to='/NEWSROOM'>NEWSROOM</Link></li>
     <li><Link to='/CAREER'>CAREER</Link></li>
     <li><Link to='/CONTACT'>CONTACT</Link></li>

     
     
    </>
    
    return (
        
         <div>
            <div className="navbar  bg-white">
           
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
        {navLinks}
      </ul>
    </div>
    <img className=" w-[60px] ml-32" src={logo}  alt="" />
    <a className=" text-xl"></a>
  </div>
  <div className="navbar-center hidden lg:flex">

    
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn  btn-ghost mr-32">Explore</button>
  </div>
  
</div> 

       
       </div>
    );
};

export default DivNavBar;