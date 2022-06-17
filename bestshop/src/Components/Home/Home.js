import React,{ useEffect, useState } from "react";
import "./Home.css";
import Pic from "./landing.png"

function Home() {
  const [data, setData] = useState([]);

  

  async function getApi() {
    const response = await fetch(`https://fakestoreapi.com/products?limit=9`);
    const data = await response.json();
    // console.log(data);
    if (data.status === 404) {
      console.log("error");
    } else {
      const exist = data.map((e)=> e.id? {...e, qty: 1}: e);
      console.log(exist)
      setData(exist)
    }

   
  }


   
  


  useEffect(() => {
    getApi();
  }, []);

  

  



  return (
    <div>
    <div className="landing">
    <img src={Pic} alt="landing"/>
    </div>
    
      <div className="flex-container">
        {data.map((e) => {
          return (
            <div className="flex-box" key={e.id}>
            <h3 >{e.title}</h3>
             <img className="productImg" src={e.image} alt={e.title} />
              <h6>{e.category}</h6>
              <h5>£{e.price.toFixed(2)}</h5>
              <button className="mainBtn" onClick={ ()=> localStorage.setItem(e.id, JSON.stringify(e))} >Add to Cart</button>
                <p>{e.description}</p>
            </div>
          );
        })}
      </div>
     
      </div>
  
  
  );
}

export default Home;
