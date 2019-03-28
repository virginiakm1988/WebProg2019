import React from 'react';

import CalcButton from '../components/CalcButton';


// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      input:" one and only religion"
    };
  }

  resetState=() => {
    // TODO
    this.setState({input:0});
  }

  addToInput = (val) =>{
    this.setState({input:this.state.input+children});//this.state.input+val});
  }
  
  handleEqual = () =>{
    this.setState({input: Math.eval(this.state.input)});
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
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator">÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.addToInput} className="calc-number">7</CalcButton>
            <CalcButton className="calc-number">8</CalcButton>
            <CalcButton className="calc-number">9</CalcButton>
            <CalcButton className="calc-operator">x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number">4</CalcButton>
            <CalcButton className="calc-number">5</CalcButton>
            <CalcButton className="calc-number">6</CalcButton>
            <CalcButton className="calc-operator">-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number">1</CalcButton>
            <CalcButton className="calc-number">2</CalcButton>
            <CalcButton className="calc-number">3</CalcButton>
            <CalcButton className="calc-operator">+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number">0</CalcButton>
            <CalcButton className="calc-number"></CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator">=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
