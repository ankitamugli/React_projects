import React,{Component} from "react";
class Reset extends Component{
    state={Count:0}
    changeCount=()=>{
        this.setState({
            Count:this.state.Count+1
        })
    }
    reset=()=>{
        this.setState({ Count:0 }) 
        }
    render(){
        return(
            <>
            <h1>Count:{this.state.Count}</h1>
            <button onClick={this.changeCount} style={{backgroundColor:"yellow",borderRadius:"5px",padding:"5px 5px"}}>Click increment</button>
            <button onClick={this.reset} style={{padding:"5px 5px", backgroundColor:"lightpink",borderRadius:"5px"}}>Reset</button>
            </>
        )
    }
}
export default Reset