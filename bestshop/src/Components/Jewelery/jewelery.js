import React, { useEffect, useState } from "react";

function Jewelery() {
  const [data, setData] = useState([]);

  async function getApi() {
    const response = await fetch(`https://fakestoreapi.com/products`);
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
    <div className="flex-container">
      {data.map((e) => {
        if (e.category === "jewelery") {
          return (
            <div className="flex-box" key={e.id}>
            <button className="mainBtn" onClick={ ()=> localStorage.setItem(e.id, JSON.stringify(e))} >
              <h3>{e.title}</h3>
              <img src={e.image} width={200} height={200} alt={e.title} />
              <h6>{e.category}</h6>
              <button className="priceBtn">£{e.price}</button>
              <p>{e.description}</p></button>
            </div>
          );
        } else {
          return <div key={e.id}></div>;
        }
      })}
    </div>
  );
}

export default Jewelery;
