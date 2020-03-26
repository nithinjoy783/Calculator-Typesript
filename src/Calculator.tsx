import React, { Component } from 'react';

//import '../App.css'

interface Result {
    error:boolean,
    sum:number,
    sub:number,
    div:number,
    mul:number
  
  }
class Calculator extends Component <{},Result> {
    num1:React.RefObject<HTMLInputElement>
    num2:React.RefObject<HTMLInputElement>
    constructor(props:any){
        super(props);
        this.state= {
            error:false,
            sum:null,
            sub:null,
            div:null,
            mul:null
        }
        this.num1 = React.createRef();
        this.num2 = React.createRef();
  
    }
    
    add = () => {
        let num1 = String(this.num1.current?.value);
        let n1 = parseInt(num1);
        let num2 = String(this.num2.current?.value);
        let n2 = parseInt(num2);
        let sum = n1+n2;
        console.log(sum)
                this.setState({sum:sum,
                        error:false});
                        let result;
                    
        
       
    }
    sub = () => {
      let num1 = String(this.num1.current?.value);
      let n1 = parseInt(num1);
      let num2 = String(this.num2.current?.value);
      let n2 = parseInt(num2);
      let sub = n1-n2;
      this.setState({sub:sub,
        error:false});
           
    }
    div = () => {
      let num1 = String(this.num1.current?.value);
      let n1 = parseInt(num1);
      let num2 = String(this.num2.current?.value);
      let n2 = parseInt(num2);
      let div = n1/n2;
      this.setState({div:div,
        error:false});
           
    }
    mul = () => {
      let num1 = String(this.num1.current?.value);
      let n1 = parseInt(num1);
      let num2 = String(this.num2.current?.value);
      let n2 = parseInt(num2);
      let mul = n1*n2;
      this.setState({mul:mul,
        error:false});
          
    }
    
    clear = () => {
        if(this.state.error===false)
        {
        this.setState({mul:0,
            sum:0,
            sub:0,
            div:0,
          error:true});
        }
  
       
      }

    render() {
        const {sum,sub,div,mul,error} = this.state;
        let result;
        
        if(sum!==0)
        {
            result = <p>Result ==>{sum}</p>
        }
        
        if(sub!==0)
        {
            result = <p>Result ==>{sub}</p>

        }
        if(div!==0)
        {
            result = <p>Result ==> {div}</p>

        }
        if(mul!==0)
        {
            result = <p>Result ==> {mul}</p>

        }
        if(error){
            result = <p>Enter the Numbers </p>
        }
        return (
            <div>
                {/* <p>
                    {number1}{number2}{prosum}
                </p> */}
                <h4>Calculator</h4>
                 <p>==>Press Clear to Start </p>
                <input type = "text" ref={this.num1}/>
                <br></br>
                <br></br>
                <input type = "text" ref={this.num2}/>
                <br></br>
                <br></br>
                <button onClick = {this.add}>Add</button>
                <button onClick = {this.sub}>Sub</button>
                <button onClick = {this.div}>Div</button>
                <button onClick = {this.mul}>Mul</button>
                <button onClick = {this.clear}>clear</button>
                {result}
            </div>
        );
    }
}

export default Calculator;