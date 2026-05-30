import React from "react";
function List3(){
      let Fet=["Nagaraj","Naga","Raj","Rajnaga"]
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
}export default List3;