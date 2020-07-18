import React, { Component } from "react";
import Die from "../Die/Die";
import styles from "./RollDice.module.css";
class RollDice extends Component {
  static defaultProps = {
    sides: ["dice", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6"],
  };
  constructor(props) {
    super(props);
    this.state = { die1: "dice", die2: "dice", isRolling: false };
  }
  roll = () => {
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    this.setState({
      die1: newDie1,
      die2: newDie2,
      isRolling: true,
    });
    setTimeout(() => {
      this.setState({
        isRolling: false,
      });
    }, 1000);
  };
  render() {
    return (
      <div className={styles.RollDice}>
        <div className={styles.RollDiceContainer}>
          <Die face={this.state.die1} isRolling={this.state.isRolling} />
          <Die face={this.state.die2} isRolling={this.state.isRolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
