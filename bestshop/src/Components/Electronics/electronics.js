import React, { useEffect, useState } from 'react';




function Electronics() {
const [data, setData] = useState([]);

async function getApi(){
  const response = await fetch(`https://fakestoreapi.com/products`);
  const data = await response.json();
  console.log(data)
  if (data.status === 404) { console.log("error") }
  else {
      setData(data)
  }
  
  }




useEffect(()=>{
getApi()
}, [])
  
  return (
    <div className='flex-container'>
   {data.map((e)=> {if(e.category ===  "electronics"){
    return (<div className="flex-box" key={e.id}>
            <h3 >{e.title}</h3>
             <img width={200} height={200} src={e.image} alt={e.title} />
              <h6>{e.category}</h6>
              <h5 className="priceBtn">£{e.price.toFixed(2)}</h5>
              <button className="mainBtn" onClick={ ()=> localStorage.setItem(e.id, JSON.stringify(e))} >Add to Cart</button>
                <p>{e.description}</p>
            </div>)
   }else{
    return;
   }})}   
    </div>
  );
}

export default Electronics;
