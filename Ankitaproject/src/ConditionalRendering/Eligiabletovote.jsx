import React from "react";

function Eligiabletovote() {
     let age=24;
    // return(
    //     <>
    //     {
    //         // by using ternary operator
    //         // (age>18)?<h1>eligiable to vote</h1>:<h1>not eligiable to vote</h1>

    //         // by using and operator
    //         // (age>18)&&<h1>eligiable to vote</h1>

    //     }
    //     </>
    // )
        

    // by using if else
        if(age>18){
            return(
                <h1>Eligiabletovote</h1>
            )
        }
        else{
            return(
                <h1>not eligaable to vote</h1>
            )
        }





}export default Eligiabletovote;