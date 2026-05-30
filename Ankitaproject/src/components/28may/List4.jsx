import React from "react";
function List4(){
    let std=[
        {name:"Raj",marks:70,age:21},
        {name:"Naga",marks:54,age:17},
        {name:"Sushila",marks:62,age:32},
        {name:"Shakila",marks:81,age:20},
        {name:"Subash",marks:48,age:34}
    ];
    return(
        <>
        <h2>std details</h2>
        <ul>
            {
                std.map((x,index)=>{
                    return(
                        <li key={index}>{x.name}-{x.marks}-{x.age}</li>
                    )
                })
            }
        </ul>
        </>
    )
}export default List4;