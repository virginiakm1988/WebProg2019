import React from 'react';

import CalcButton from '../components/CalcButton';


// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      input:"",
      operators:[],
      numbers:[],
      finished: false,
      lastOper:"",
      lastNum:0
    };
  }

  resetState=() => {
    // TODO
    this.setState({
      input:"",
      operators:[],
      numbers:[],
      finished: false
    });
  }

  addToInput(val){
    if (this.state.operators.length === 0)
    {
      this.setState({
        operators:[],
      numbers:[],
      finished: false        
      })
    }
    if (this.state.finished == false)
    {
      this.setState({
      input: this.state.input === '0'? val: String(this.state.input)+String(val),
      finished:false
      });
    }
    else{
      this.setState({
        input:val,
        finished:false
      })
    }
    
    
  }
  
  inputDot(){
    if(this.state.input.indexOf('.')===-1){
      this.setState({
        input: this.state.input + '.'
      })
    }
  }

  toggleSign(){
    this.setState({
      input:(this.state.input[0]==="-")? this.state.input.substr(1):"-"+this.state.input
    })
  }
  
  handleEqual = () =>{
    this.setState({input: Math.eval(this.state.input)});
  }

  inputPercent=()=>{
     this.setState({
       input: String(parseFloat(this.state.input)/100)
     })
  }

  inputOperators = (val) =>{
    if(this.state.finished === false)//if numbers before operators
    {
      console.log("numbers before operators", this.state.numbers, this.state.operators)
      var tempNumber = this.state.numbers;
      tempNumber.push(this.state.input);
 
      var tempOper = this.state.operators;
      if(this.state.operators.length > 0)//operators inside, calculate it
      {
        var num1 = Number(tempNumber.pop());
        var num2 = Number(tempNumber.pop());
        var oper = this.state.operators.pop();
        console.log("calculate numbers",num1,num2,oper)

        if(oper === "/")
        {
          tempNumber.push(Math.floor(num2/num1));
        }
        else if( oper === "*")
        {
          tempNumber.push(num1*num2)
        }
        else if (oper === "+"){
          tempNumber.push(num1+num2)
        }
        else if (oper === '-'){
          tempNumber.push(num2-num1)
        }
        
      }
      
      
      if(val === "="){
        tempOper = []
      }
      else{
        tempOper.push(val)
      }

      console.log(tempNumber)
      

      var num = tempNumber[tempNumber.length-1]
      this.setState({
        input: num,
        numbers: tempNumber,
        finished : true,
        operators: tempOper,
      })


      
    }
    else if (!( val === "=")){
      var tempOper = this.state.operators;
      console.log("in else",tempOper)
      tempOper.pop();
      tempOper.push(val)
      this.setState({
        operators:tempOper
      })
    }

    
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }



  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">
            {this.state.input}
            </div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={()=>this.toggleSign()}>+/-</CalcButton>
            <CalcButton onClick={()=>this.inputPercent()}>%</CalcButton>
            <CalcButton onClick={()=>this.inputOperators("/")} className="calc-operator">÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={()=>this.addToInput(7)} children = "7" className="calc-number">7</CalcButton>
            <CalcButton onClick={()=>this.addToInput(8)} children = "8" className="calc-number">8</CalcButton>
            <CalcButton onClick={()=>this.addToInput(9)} children = "9" className="calc-number">9</CalcButton>
            <CalcButton onClick={()=>this.inputOperators("*")} className="calc-operator">x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={()=>this.addToInput(4)} children = "4" className="calc-number">4</CalcButton>
            <CalcButton onClick={()=>this.addToInput(5)} children = "5" className="calc-number">5</CalcButton>
            <CalcButton onClick={()=>this.addToInput(6)} children = "6" className="calc-number">6</CalcButton>
            <CalcButton onClick={()=>this.inputOperators("-")} className="calc-operator">-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={()=>this.addToInput(1)} children = "1" className="calc-number">1</CalcButton>
            <CalcButton onClick={()=>this.addToInput(2)} children = "2" className="calc-number">2</CalcButton>
            <CalcButton onClick={()=>this.addToInput(3)} children = "3" className="calc-number">3</CalcButton>
            <CalcButton onClick={()=>this.inputOperators("+")} className="calc-operator">+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={()=>this.addToInput(0)} className="calc-number">0</CalcButton>
            <CalcButton  className="calc-number"></CalcButton>
            <CalcButton onClick={()=>this.inputDot()} className="calc-number">.</CalcButton>
            <CalcButton onClick={()=>this.inputOperators("=")} className="calc-operator">=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
