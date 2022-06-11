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
    return (<div className='flex-box' key={e.id}>
    <button className='mainBtn' onClick={ ()=> localStorage.setItem(e.id, JSON.stringify(e))} >
   <h3>{e.title}</h3>
   <img src={e.image} width={200} height={200} alt={e.title}/>
   <h6>{e.category}</h6>
   <button className='priceBtn'>£{e.price}</button>
   <p>{e.description}</p></button>
   </div>)
   }else{
    return <div key={e.id}></div>
   }})}     
    </div>
  )
}

export default Women