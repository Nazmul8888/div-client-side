

import img1 from '../../../assets/banner/Accelerating-Economy.png'
// import img2 from '../../../assets/ind/CMMI-Level-5-1024x324.png'
// import img3 from '../../../assets/ind/empowering.jpg'
// import img4 from '../../../assets/ind/Smarter-Tomorrow-1024x324.png'
const Industries = () => {
    return (
        <div className=' c'>
            <div>
                <img src={img1} alt="" />
            </div>
            <br />
            <div className=' ml-72'>
            <h2>Technological innovation has transformed industries to become more agile and higher customer <br /> responsive than ever to meet the dynamic requirements of the competitive landscape.</h2>
            <br />
                <p>Businesses require smarter and more cost effective cutting edge solutions to manage their <br /> interests from any part of the world with efficiency and transparency. Pointing on different industry <br /> trends, we offer solutions and services to meet the customized requirements for players across <br /> different industries.</p>
            </div>
            <br />
            <br />
            <div className=" flex justify-between items-center">
                
                <div className=' flex justify-evenly  gap-10 text-lg ml-72'>
                
                <div>
                    <ul>
                        <li id='menu-item-12' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-12'>
                            <a className='text-[#0a6db8]' href=""> BANKING FINANCE</a>
                            <hr />
                            <br />
                            </li>
                        <li id='menu-item-15' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-15'>
                            <a className='text-[#0a6db8]' href=""> PORT & LOGISTICS</a>
                            <hr />
                            <br />
                            </li>
                        <li id='menu-item-18' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-18'>
                            <a className='text-[#0a6db8]' href=""> GOVERNMENT & DEFENSE</a>
                            <hr />
                            <br />
                            </li>
                       
                       
                    </ul>
                </div>
               
                <div>
                    <ul>
                        <li id='menu-item-12' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-12'>
                            <a className='text-[#0a6db8]' href="">SME & DEVELOPMENT</a>
                            <hr />
                            <br />
                            </li>
                        <li id='menu-item-15' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-15'>
                            <a className='text-[#0a6db8]' href="">AUTOMOBILE</a>
                            <hr />
                            <br />
                            </li>
                        <li id='menu-item-18' className='menu-item menu-item-type-post_type menu-item-object-page menu-item-18'>
                            <a className='text-[#0a6db8]' href="">TELECOMMUNICATION</a>
                            <hr />
                            <br />
                            </li>
                       
                       
                    </ul>
                </div>
                </div>
                {/* <div className='w-[250px]   mr-72'>
                    <img src={img2} alt="" />
                    <br />
                    <br />
                    <img src={img3} alt="" />
                    <br />
                    <br />
                    <img src={img4} alt="" />
                    <br />
                    <br />
                </div> */}
            </div>
        </div>
    );
};

export default Industries;