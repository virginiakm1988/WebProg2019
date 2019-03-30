import React from 'react';

import CalcButton from '../components/CalcButton';


// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      input:""
    };
  }

  resetState=() => {
    // TODO
    this.setState({input:0});
  }

  addToInput(val){
    this.setState({
      input: this.state.input == '0'? val: String(this.state.input)+String(val)
    });//this.state.input+val});
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
            <CalcButton className="calc-operator">÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={()=>this.addToInput(7)} className="calc-number">7</CalcButton>
            <CalcButton onClick={()=>this.addToInput(8)} className="calc-number">8</CalcButton>
            <CalcButton onClick={()=>this.addToInput(9)} className="calc-number">9</CalcButton>
            <CalcButton className="calc-operator">x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={()=>this.addToInput(4)} className="calc-number">4</CalcButton>
            <CalcButton onClick={()=>this.addToInput(5)} className="calc-number">5</CalcButton>
            <CalcButton onClick={()=>this.addToInput(6)} className="calc-number">6</CalcButton>
            <CalcButton className="calc-operator">-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={()=>this.addToInput(1)} className="calc-number">1</CalcButton>
            <CalcButton onClick={()=>this.addToInput(2)} className="calc-number">2</CalcButton>
            <CalcButton onClick={()=>this.addToInput(3)} className="calc-number">3</CalcButton>
            <CalcButton className="calc-operator">+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={()=>this.addToInput(0)} className="calc-number">0</CalcButton>
            <CalcButton  className="calc-number"></CalcButton>
            <CalcButton onClick={()=>this.inputDot()} className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator">=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
