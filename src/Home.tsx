import React, { useEffect, useRef,useState } from 'react'
import { useAppSelector,useAppDispatch } from './Hooks'
import { increment,decrement } from './Slice/CounterSlice'



//import GotoTop from './Componends/GotoTop'

export const Home = () => {
  const count=useAppSelector((curr)=>curr.data.value)
  const dispatch=useAppDispatch()
  

//   const ref = useRef(null);

//   const Hi = () => {
//     ref.current?.scrollIntoView({behavior: 'smooth'});
//   };

//   useEffect(()=>Hi(),[])
  return (
    <div>
    
{count}
       Home 
      {/* <button onClick={()=>{Hi()}}>Button</button> */}

    <button onClick={()=>{dispatch(increment())}}>Button</button>
    </div>
  )
}

