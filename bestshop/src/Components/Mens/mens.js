import React, { useEffect, useState } from 'react';




function Mens() {
const [data, setData] = useState([]);

async function getApi(){
  const response = await fetch(`https://fakestoreapi.com/products`);
  const data = await response.json();
  console.log(data)
  if (data.status === 404) { console.log("error") }
  else {
    const exist = data.map((e)=> e.id? {...e, qty: 1}: e);
    console.log(exist)
    setData(exist)
  
}
  
  }




useEffect(()=>{
getApi()
}, [])
  
  return (
    <div className='flex-container'>
   {data.map((e)=> {if(e.category === "men's clothing"){
    return (<div className="flex-box" key={e.id}>
            <h5 >{e.title}</h5>
             <img className='productImg' src={e.image} alt={e.title} />
              <h6>{e.category}</h6>
              <h5 className="priceBtn">£{e.price.toFixed(2)}</h5>
              <button className="mainBtn" onClick={ ()=> localStorage.setItem(e.id, JSON.stringify(e))} >Add to Cart</button>
                <p>{e.description}</p>
            </div>)
   }else{
    return <div key={e.id}></div>
   }})}   
    </div>
  );
}

export default Mens;
