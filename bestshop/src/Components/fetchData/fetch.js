import axios from "axios";
import { useState, useEffect } from 'react';




const ApiCall = () => {
    const [data, setData] = useState([])
    const fetchData = async () => { 
    const response = await axios.get("https://fakestoreapi.com/products")
    console.log(response)
    setData(response)
    }
     
    useEffect(() => {
       fetchData() 
    }, [])
    
    return (
        <div>
               
        </div>
    )
}

export default ApiCall
