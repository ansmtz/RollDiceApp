import React, { Component } from "react";
import styles from "./Die.module.css";
class Die extends Component {
  render() {
    const diceImage = "../../assets/dice-5.png";
    let dieStyles = [styles.Die];
    if (this.props.isRolling) {
      dieStyles.push(styles.rolling);
    }
    return (
      <div className={dieStyles.join(" ")}>
        <img src={require(`../../assets/images/${this.props.face}.png`)} />
      </div>
    );
  }
}

export default Die;
