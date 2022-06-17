import React, { useEffect, useState } from 'react'

const Women = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        setError(false)
        try {
            const res  = await fetch('https://fakestoreapi.com/products/')
            const data = await res.json();
            
            setData(data)
            
            console.log(data)

            
        } catch (error) {
            setError(true)
            
        }
        setLoading(false)

    }

    useEffect(() => {
        fetchData()
    }, [])

    // function loadingCheck(){
    //     if(loading){
    //         <p>Loading...</p> 
    //       }else{
    //         data.map(collection => (
    //             <div key={collection.id}>{collection.title}</div>))}
    // }

  return (
      <div className='flex-container'>
           {data.map((e)=> {if(e.category ===  "women's clothing"){
    return (<div className="flex-box" key={e.id}>
            <h3 >{e.title}</h3>
             <img width={200} height={200} src={e.image} alt={e.title} />
              <h6>{e.category}</h6>
              <h5 className="priceBtn">£{e.price.toFixed(2)}</h5>
              <button className="mainBtn" onClick={ ()=> localStorage.setItem(e.id, JSON.stringify(e))} >Add to Cart</button>
                <p>{e.description}</p>
            </div>)
   }else{
    return <div key={e.id}></div>
   }})}     
    </div>
  )
}

export default Women