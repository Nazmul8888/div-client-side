import LeftSide from '../LeftSide/LeftSide';
import './product.css'

const Products = () => {
    return (
        <div>
           <div>
            <img className=" ml-10" src="https://i.ibb.co/P5Xb9JM/products-1.png" alt="" />
            </div> 
            <div className=" flex justify-center mr-40 py-10">
                <p>We have a wide spectrum of products to cater your specific business needs.  Being a highly process <br /> driven company, we undergo  robust quality testing to ensure flawless, round the clock,  and world- <br />class performance. All our products come with strong post sales services and client supports.</p>
            </div>
            
            <div className=" flex  gap-20 justify-center text-[#0A6DB8] py-10  mr-64 roboto-regular  ">
                <div>
                    <ul>
                    <h1 className=" uppercase text-2xl  font-bold ">FINANCIAL ECOSYSTEM</h1>
                    <hr />
                    <br />
                    <li className=" tex-css ">
                        <a href="">AML Solution Suite</a>
                    </li>
                    <li className=" tex-css ">
                        <a href="">Pay 365</a>
                    </li>
                    <li className=" tex-css ">
                        <a href="">Remit 365</a>
                    </li>
                    <li className=" tex-css ">
                        <a href="">Micro Fine360</a>
                    </li>
                    <li className=" tex-css ">
                        <a href="">Co-Op360</a>
                    </li>
                    <li className=" tex-css ">
                        <a href="">Core Banking Solution </a>
                    </li>
                    <li className=" tex-css ">
                        <a href="">Central Bank Reporting</a>
                    </li>
                    
                    </ul>
                </div>
                <div>
                    <ul>
                    <h1 className=" uppercase text-2xl  font-bold ">ERP-SMART ENTERPRISE</h1>
                    <hr />
                    <br />
                    <li className=" tex-css " >
                        <a href="">Smart HRM</a>
                    </li>
                   
                    <li className=" tex-css ">
                        <a href="">Smart Payroll</a>
                    </li>
                   
                    <li className=" tex-css ">
                        <a href="">Smart Benefit</a>
                    </li>
                   
                    <li className=" tex-css ">
                        <a href="">Smart Asset</a>
                    </li>
                   
                    <li className=" tex-css ">
                        <a href="">Smart Accounts</a>
                    </li>
                    <li className=" tex-css ">
                        <a href="">Smart Vehicle</a>
                    </li>
                   
                    
                    </ul>
                </div>
            </div>

            {/* section second */}


            <div className=" flex  gap-20 justify-center text-[#0A6DB8] py-10   mr-96 roboto-regular  ">
                <div>
                    <ul>
                    <h1 className=" uppercase text-2xl  font-bold  ml-96 ">PORT & LOGISTICS</h1>
                    
                    <br />
                    <li className=" tex-css ml-96 ">
                        <a href="">TIMS</a>
                    </li>
                    <li className=" tex-css ml-96 ">
                        <a href="">Port Management</a>
                    </li>
                    
                    
                    </ul>
                </div>
                <div>
                    <ul>
                    <h1 className=" uppercase text-2xl  font-bold ">MARKETPLACE</h1>
                    <hr />
                    <br />
                    <li className=" tex-css " >
                        <a href="">E-Micromela</a>
                    </li>
                   
                    
                   
                    
                    </ul>
                </div>
                <LeftSide></LeftSide>
            </div>
        </div>
    );
};

export default Products;