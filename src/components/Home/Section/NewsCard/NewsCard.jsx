import { useEffect, useState } from "react";
import Card from "./Card";


const NewsCard = () => {
    const [news, setNews] = useState();

    useEffect(()=>[
        fetch('news.json')
        .then(res=> res.json())
        .then(data=>setNews(data))
    ],{})
    return (
        <div>
          {
            news?.map(item=><Card key={item._id} item={item}></Card>)
          }  
        </div>
    );
};

export default NewsCard;