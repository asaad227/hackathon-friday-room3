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
      <div>
           {data.map((e)=> {if(e.category ===  "women's clothing"){
    return (<div key={e.id}>
   <h4>{e.title}</h4>
   <img src={e.image} width={200} alt={e.title}/>
   <h5>{e.category}</h5>
   <p>{e.description}</p>
   </div>)
   }else{
    return <div key={e.id}></div>
   }})}     
    </div>
  )
}

export default Women