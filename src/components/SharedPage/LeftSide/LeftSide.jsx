import img1 from '../../../assets/ind/empowering.jpg'
import img2 from '../../../assets/ind/CMMI-Level-5-1024x324.png'
import img3 from '../../../assets/ind/Smarter-Tomorrow-1024x324.png'

const LeftSide = () => {
    return (
        <div>
            <div className=' flex gap-5'>
                <div>
                <img className=' w-[87px] h-[76px]' src={img1} alt="" />
                </div>
                <div>
                   
                    <h1 className=' font-bold  '>Empowering Rural Population With <br /> Microfin 360</h1>
                   
                </div>
                
            </div>
            <br />
            <hr />
            <br />
            <div className=' flex gap-5'>
                <div>
                <img className=' w-[87px] h-[76px]' src={img2} alt="" />
                </div>
                <div>
                   
                    <h1 className=' font-bold'>Bridging The Vision Of A Smarter <br /> Tomorrow</h1>
                   
                </div>
                
            </div>
            <br />
            <hr />
            <br />
            <div className=' flex gap-5'>
                <div>
                <img className=' w-[87px] h-[76px]' src={img3} alt="" />
                </div>
                <div>
                   
                    <h1 className=' font-bold'>DataSoft – The First CMMI Level 5 <br /> Company In Bangladesh</h1>
                   
                </div>
                
            </div>
            <br />
            <hr />
        </div>
    );
};

export default LeftSide;