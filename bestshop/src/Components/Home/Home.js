import React,{ useEffect, useState } from "react";

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
      {data.map((e) => {
        return (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.image} width={200} alt={e.title} />
            <h5>{e.category}</h5>
            <p>{e.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
