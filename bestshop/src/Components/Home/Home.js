import React,{ useEffect, useState } from "react";
import "./Home.css";
import Pic from "./landing.png"

function Home() {
  const [data, setData] = useState([]);
  

  async function getApi() {
    const response = await fetch(`https://fakestoreapi.com/products?limit=9`);
    const data = await response.json();
    console.log(data);
    if (data.status === 404) {
      console.log("error");
    } else {
      setData(data);
    }
  }

  useEffect(() => {
    getApi();
  }, []);



  return (
    <div>
    <img src={Pic} alt="landing"/>
      <div className="flex-container">
        {data.map((e) => {
          return (
            <div className="flex-box" key={e.id}>
            <button className="mainBtn" onClick={ ()=> localStorage.setItem(e.id, JSON.stringify(e))} >
            <h3 >{e.title}</h3>
             <img width={200} height={200} src={e.image} alt={e.title} />
              <h6>{e.category}</h6>
              <button className="priceBtn">£{e.price.toFixed(2)}</button>
                <p>{e.description}</p></button>
            </div>
          );
        })}
      </div>
     
      </div>
  
  
  );
}

export default Home;
