import section from '../../../../assets/section/1683129310565.jpg'
import DivContainer from '../../../Hooks/DivContainer';

const DivSection = () => {
    return (
        <DivContainer>
        <div className=' py-10'> 
        <h1 className=" text-5xl font-bold text-center">The company that leaders trust to help <br />them grow and thrive</h1>
        <div className=" flex justify-between items-center py-10 ">
          <div>
            <h1 className=' font-bold text-3xl text-[#0070F2]'>Cloud solutions for every business</h1>
            <br />
            <h2 className=' text-xl'>Proven and best in class: integrated, with silos down, <br /> productivity up, and potential unleashed.</h2>
            <br />
            <button className="btn text-lg text-white  btn-wide bg-[#0070F2]">Get Started With Div</button>
            </div>  
            <div>
                <img src={section} alt="" />
            </div>
        </div>

        </div>
        </DivContainer>
    );
};

export default DivSection;