import React from "react";
import "./Player.css";

// Display the Player on the Map and get the movment from Map component

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetHeight: 32,
      assetWidth: 32,
      asset: "link/linkFront/linkFront-Step4.png"
    };
  }
  assetAnimation(direction) {
    for (let i = 1, delay = 0; i <= 4; i++, delay = delay + 30) {
      setTimeout(() => {
        this.setState({
          asset: `link/link${direction}/link${direction}-Step${i}.png`
        });
      }, delay);
    }
    console.log(this.state.asset);
  }
  //  Method which get inputs from ComponentDidMount (Game component) and send the correct asset to do on the Player
  getAsset() {
    let newKey = this.props.keyName;
    console.log(newKey);
    if (this.props.keyName === newKey) {
      switch (newKey) {
        case "ArrowLeft":
          this.assetAnimation("Left");

          break;

        case "ArrowUp":
          this.assetAnimation("Back");
          break;

        case "ArrowRight":
          this.assetAnimation("Right");
          break;

        case "ArrowDown":
          this.assetAnimation("Front");
          break;
      }
    }
  }
  componentWillReceiveProps() {
    this.getAsset();
  }

  render() {
    return (
      <div
        className="player"
        style={{
          top: `${this.props.y * this.state.assetHeight}px`,
          left: `${this.props.x * this.state.assetWidth}px`
        }}
      >
        <img src={this.state.asset} alt={"Player"} />
      </div>
    );
  }
}

export default Player;
