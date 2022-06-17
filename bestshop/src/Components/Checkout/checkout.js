import React, { useEffect, useState } from "react";

export default function Checkout() {
  const [items, setItems] = useState([]);
  
 
 var newItem = [];
  function check() {
    // eslint-disable-next-line 
    const objValue = Array.from(Object.values(localStorage));
    let item = [];
    if (objValue.length >= 1) {
      for (let i = 0; i < objValue.length; i++) {
        item = JSON.parse(objValue[i]);
        newItem.push(item);
      }
    } else {
      return;
    }
  }

  useEffect(() => {
    setItems(newItem);
    //eslint-disable-next-line
  }, []);

  function onAdd(e) {
    const exist = items.find((x) => x.id === e.id);
    if (exist) {
      setItems(items.map(x=> x.id === e.id? {...exist, qty: exist.qty +1}: x))
    } else {
      setItems([...items, { ...e, qty: 1 }]);
    }
  }

  function onRemove(e) {
    const exist = items.find((x) => x.id === e.id);
    if(exist.qty > 1){
      setItems(
            items.map((x) => (x.id === e.id ? { ...exist, qty: exist.qty - 1 } : x))
          );
    }else{
      setItems(items.filter((x) => x.id !== e.id))
       localStorage.removeItem(e.id)
    }

  }

  function count() {
    check();
    if (items.length >= 1) {
      return (
        <div>
          {items.map((e) => {
            return (
              <div className="flex-box" key={e.id}>
                <h5>{e.title}</h5>
                <img src={e.image} width={50} height={50} alt={e.title} />
                <h5>£{e.price}</h5>
                <button className="chkAdd" onClick={() => onAdd(e)}>+</button>
                <button className="chkRemove" onClick={() => onRemove(e) && localStorage.removeItem(e.id)} >
                  {" "}
                  -
                </button>
                <h5>Sub-total: £{e.price * e.qty}</h5>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          <h5>Your Basket Is Empty</h5>
          <hr/>
        </div>
      );
    }
  }
  console.log(items);
  const total = items.reduce((a, b) => a + b.qty * b.price, 0);
  console.log(total);
  return (
    <div className="checkoutP">
      {count()}
      <div>
        <h4 className="subTotal">Cart-total: £{total.toFixed(2)} </h4>
        <hr/>
      </div>
    </div>
  );
}
