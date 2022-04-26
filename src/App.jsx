import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

 const handlePlusBtn = ()=>{
   if(count==1000){
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
   if(number>1000){
     alert('max value is 1000 only')
     return
   }
    setCount(number)
  }

  return (
    <div className="App">
      <div className="counter">
        <button onChange={handelCounterValue} onClick={handleMinusBtn}>-</button>
        <input onChange={handelCounterValue} value={count} type="text"  />
        <button onClick={handlePlusBtn}>+</button>
      </div>
    </div>
  )
}

export default App
