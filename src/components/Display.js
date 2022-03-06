import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";

class Display extends Component {
  state = {
    APR: 0.05
  };

  componentDidMount() {
    this.calculateAPR();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateAPR();
    }
  }

  calculateAPR = () => {
    const { amount } = this.props;

    if (1000 < amount && amount < 10000) {
      this.setState({ APR: 0.042 });
    }
    if (10001 < amount && amount < 50000) {
      this.setState({ APR: 0.052 });
    }
    if (50001 < amount && amount < 75000) {
      this.setState({ APR: 0.0253 });
    }
    if (75001 < amount && amount < 100000) {
      this.setState({ APR: 0.0302 });
    }
  };

  calculateMonthlyRepayment = () => {
    const { amount, years } = this.props;

    const decimalFormat = this.state.APR + 1;
    const totalOwed = decimalFormat * amount;
    const monthlyRepayment = totalOwed / (years * 12);

    return <p>{Math.round(monthlyRepayment)} $</p>;
  };

  percentageAPR = () => {
    return <p>{this.state.APR * 100}%</p>;
  };

  render() {
    return (
      <div className="flex">
        <DisplayChild func={this.percentageAPR()} text="Interest rate" />
        <DisplayChild func={this.calculateMonthlyRepayment()} text=" Monthly installment" />
      </div>
    );
  }
}

Display.propTypes = {
  years: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Display;
