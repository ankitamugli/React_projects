import React from "react";
function List(){
    let Fet=["HTML","CSS","JS","REACTJS"];
    return(
        <>
        { <ul>
            {
             Fet.map((x)=>{
                return <li>{x}</li>;
            })
            
            }
        </ul> }

        </>
    )

} export default List;