import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import NewsCardRoom from "./NewsCardRoom";


const NewsRoom = () => {

    const [NewsRoom, setNewsRoom] = useState([]);


    useEffect(()=>{
   fetch('room.json')
   .then(res=>res.json())
   .then(data=>setNewsRoom(data))

    },[])


    return (
        <div>
        <div><img src="https://i.ibb.co/qjZKDb8/nrewsroom.jpg" alt="" /></div>
        
        <div className=" ml-96 py-10">
           {
            NewsRoom?.map(item=><NewsCardRoom key={NewsRoom._id} item={item}></NewsCardRoom>)
           } 
        </div>
        </div>
    );
};

export default NewsRoom;