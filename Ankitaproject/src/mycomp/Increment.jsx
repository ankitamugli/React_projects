import React,{Component} from "react";

class Increment extends Component{

    state={Count:0}

    changeCount=()=>{
        this.setState({
            Count:this.state.Count+1
        })
    }

    render(){
        return(
            <>
            <h1>Counter={this.state.Count}</h1>

            <button
              onClick={this.changeCount}
              style={{
                backgroundColor:"yellow",borderRadius:"5px",padding:"5px 5px"}}>click Increment
            </button>

            </>
        )
    }
}

export default Increment;