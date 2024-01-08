import { useRef } from "react";
import Marquee from "react-fast-marquee";

const LiveHeading = () => {

    const pauseRef = useRef();


    // const handelPlay = ()=>{
    //     pauseRef.current.play();
    // };
    // const handelPause = ()=>{
    //     pauseRef.current.pause();
    // };
   

    return (
        <div className=" bg-[#F3F8FF]">
            <div><h1 className=" text-5xl font-bold text-center text-black">Trusted by companies small and large around the globe</h1></div>
            <br />
            <br />
            <br />
            <br />
            <div className=" flex justify-center">
                <button className=" btn bg-[#0070F2] btn-wide  ">Search Our Customer Stories</button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Marquee ref={pauseRef}>
                <div className=" flex justify-between gap-20">
                <div><img className=" w-[220px]" src="https://i.ibb.co/0nB9SnL/lupin-customer-logo.png" alt="" /></div>
                <div><img className=" w-[90px]" src="https://i.ibb.co/PWz3qN1/nhl-customer-logo.png" alt="" /></div>
                <div><img className=" w-[110px]"src="https://i.ibb.co/rcQ33Jj/vodafone-customer-logo.png" alt="" /></div>
                <div><img className=" w-[220px]" src="https://i.ibb.co/Q9zkctg/Carhartt-customer-logo.png" alt="" /></div>
                <div><img className=" w-[220px]" src="https://i.ibb.co/Xk9PwCB/changi-customer-logo.png" alt="" /></div>
                <div><img className=" w-[120px]" src="https://i.ibb.co/nwXJSTg/cirque-du-soleil-customer-vertical-logo.png" alt="" /></div>
                <div><img className=" w-[220px]" src="https://i.ibb.co/mTpMycS/ferrara-candy-company-customer-logo.png" alt="" /></div>
                <div><img className=" w-[220px]" src="https://i.ibb.co/jHWsL6k/freudenberg-customer-logo.png" alt="" /></div>
                <div><img className=" w-[220px]" src="https://i.ibb.co/pn2S94g/grupo-nutresa-logo.png" alt="" /></div>

               
                
                </div>
                
         </Marquee>
         {/* <div className=" flex justify-center">
            <button onClick={handelPlay} className=" btn-Play btn-primary bg-lime-400 ">Play</button>
            <button onClick={handelPause} className=" btn-Pause ">Pause</button>
         </div> */}
        </div>
    );
};

export default LiveHeading;