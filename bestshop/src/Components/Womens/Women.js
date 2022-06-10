import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Women = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        setError(false)
        try {
            const { res } = await axios.get('https://fakestoreapi.com/products/category/womens')
            
            setData(res)
            
            console.log(res)

            
        } catch (error) {
            setError(true)
            
        }
        setLoading(false)

    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
      <div>
          {/* {loading && <p>Loading...</p>}
            {error && <p>Error!</p>}
          {item.map(collection => (
                <div key={collection.id}>
            ) */}
          
          
    </div>
  )
}

export default Women