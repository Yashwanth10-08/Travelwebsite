import { Component } from "react";
import Mountain1 from "../Assets/1.jpg";
import Mountain2 from "../Assets/2.jpg";
import Mountain3 from "../Assets/3.jpg";
import Mountain4 from "../Assets/4.jpg";

import "./Destination.css";
class Destinationdata extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="" src={this.props.img1} />
          <img alt="" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default Destinationdata;