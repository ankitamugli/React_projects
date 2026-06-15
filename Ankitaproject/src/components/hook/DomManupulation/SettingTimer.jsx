import React from 'react'
import { useEffect } from 'react'

function SettingTimer() {
    useEffect(
         ()=>{
            setInterval(() => {
                console.log("execute after 3 second")
            }, 3000);
        }
    )
  return (
    <div>SettingTimer</div>
  )
}

export default SettingTimer