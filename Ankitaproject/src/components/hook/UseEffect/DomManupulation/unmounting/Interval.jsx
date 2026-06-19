import React from 'react'
import { useEffect} from 'react'
function Interval() {
    useEffect(
        ()=>{
            let timer=setInterval(
                ()=>{
                    console.log("hi");

            },5000)
            return()=>{  //clean up function
                clearInterval(timer)

            }
        },[]
    )
  return (
    <div>Interval</div>
  )
}

export default Interval