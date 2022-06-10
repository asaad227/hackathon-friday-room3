import { useEffect, useState } from "react";

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
    <div>
      {data.map((e) => {
        if (e.category === "jewelery") {
          return (
            <div key={e.id}>
              <h4>{e.title}</h4>
              <img src={e.image} width={200} alt={e.title} />
              <h5>{e.category}</h5>
              <p>{e.description}</p>
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