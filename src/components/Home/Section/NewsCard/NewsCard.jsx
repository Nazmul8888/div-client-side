import { useEffect, useState } from "react";
import Card from "./Card";


const NewsCard = () => {
    const [news, setNews] = useState([]);

   useEffect(()=>{
    fetch('news.json')
    .then(res=>res.json())
    .then(data=>setNews(data))
   },[])
    return (
        <div>
            <h1 className=" text-black  text-2xl font-bold text-center">Additional solutions that support your success</h1>
        <div className=" grid grid-cols-4 py-10 ">
          {
            news?.map(item=><Card key={item._id} item={item}></Card>)
          }  
        </div>
        </div>
    );
};

export default NewsCard;