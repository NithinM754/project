import React from "react";
import {Component} from 'react'
import  './menu.css'
 class Counter extends Component{
    state={
        count:0,
    };
    handleIncrement=()=>{
        this.setState({ count: this.state.count + 1})
    };
    handleDecrement=()=>{
        this.state.count<1  ?this.setState({ count: 1}):this.setState({count: this.state.count - 1});
    };
    render(){
        return(
            <div>
            <button onClick={this.handleDecrement}>-</button>
            <span>{this.state.count}</span>
            <button onClick={this.handleIncrement}>+</button>
        </div>
    )
}
};
export default Counter