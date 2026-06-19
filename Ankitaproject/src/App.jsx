import React, { Suspense, lazy } from "react";
import Hello from "./components/hook/UseEffect/Controlledcomponent/Hello";
import Para from "./components/hook/statelifiting/Para";
import Btn from "./components/hook/statelifiting/Btn";
import Lazzy from "./components/hook/lazyloading/Lazzy";


const Lazzy = lazy(() =>
  import("./components/hook/lazyloading/Lazzy")
);




function App() {
  return (
    <>

    {/* <Hi/>
    <Hello/> */}
    
{/*        
        <Btn username={username} setusername={setusername} />
      <Para username={username} /> */}

      <Suspense fallback={<h1>loading.....</h1>}>
      <Lazzy/>
      </Suspense>


  
    

    
    </>
    
  );
}

export default App;