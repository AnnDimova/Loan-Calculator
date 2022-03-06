import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";


import "../styles/Calculator.css";
import "react-input-range/lib/css/index.css";

class Calculator extends Component {
  state = {
    amountValue: 50000,
    yearsValue: 5
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ yearsValue: value });
  };

  render() {
    const { amountValue, yearsValue } = this.state;

    return (
      <div className="App">
        <h4>How much would you like to borrow?</h4>
        <img src="https://www.pngkey.com/png/full/440-4402410_cartoon-stack-of-money-cartoon-money-stack-transparent.png" alt="" />
        <h3> {amountValue} $ </h3>
        <InputRange
          step={500}
          maxValue={100000}
          minValue={1000}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        <h4> What is your preferred term of the loan? </h4>
        <h3>{yearsValue}
            {yearsValue === 1 && " year"}
            {2 <= yearsValue && " years"}
            </h3>
        <InputRange
          step={1}
          maxValue={10}
          minValue={1}
          value={yearsValue}
          onChange={this.handleYearChange}
        />
        <Display years={yearsValue} amount={amountValue} />
      </div>
    );
  }
}

export default Calculator;
