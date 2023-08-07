import React from "react";

import "./News-list.css";
import { BsFillFastForwardFill } from "react-icons/bs";
function NewsList({ news }) {
  // const [show, setshow] = useState(false);
 const truncate = (str)=>{

   return str.length > 10 ? str.substring(0, 150) + "..." : str;
 }
 const truncates = (str)=>{

  return str.length > 10 ? str.substring(0, 50) + "..." : str;
}
  return (
    <>
 

      <div className="box-container">
        <div className="box">
          <img src={news.image} alt="news-pic" />
          <span className="name">{truncates(news.title)}</span>
          <span>
           <p> {truncate(news.description)}</p>
          </span>
          <span
            className="seemore"
            
          >
            <button className="btn" onClick={() => window.open(news.url)}>

            see more <BsFillFastForwardFill style={{marginLeft:"5px"}} className="btn-in" />
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default NewsList;
