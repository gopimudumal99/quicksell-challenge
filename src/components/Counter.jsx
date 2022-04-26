import React,{useState} from 'react'
import "./Counter.css"

function Counter() {
    const [count, setCount] = useState(1)
    const max = 1000;
    
 const handlePlusBtn = ()=>{
   if(count==max){
    alert('max value is 1000 only')
     return
   }
    setCount(count+1)
  }

 const handleMinusBtn = () =>{
    setCount(count-1)
  }

 const handelCounterValue = (e) =>{
   let number = +( e.target.value)
   if(number>max){
     alert('max value is 1000 only')
     return
   }
    setCount(number)
  }
  
  return (
 <div className="counter">
    <button onChange={handelCounterValue} onClick={handleMinusBtn}>-</button>
    <input onChange={handelCounterValue} value={count} type="text"  />
    <button onClick={handlePlusBtn}>+</button>
  </div>
  )
}

export default Counter