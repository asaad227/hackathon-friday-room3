import React from 'react'

function Checkout() {
  const objValue = Array.from(Object.values(localStorage));
  let item = [];
  let newItem = []
  for(let i = 0; i < objValue.length; i++){
   item = JSON.parse(objValue[i]);
   newItem.push(item)
  }

console.log(newItem)


//   for(let e in objValue){
//    const nums = JSON.parse(objValue[e])
//  console.log(nums)
//   }
  

  return (
  <div className='flex-box'>
    {newItem.map(e=>{
      return (<div key={e.id}>
        <h5>{e.title}</h5>
        <img width={100} height={100} src={e.image} alt={e.title}/>
        <h5>£{e.price}</h5>
      </div>)
    })}
    </div>
  )
}

export default Checkout