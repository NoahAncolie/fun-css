import React from "react";
import { ArrowNext, ArrowPrevious } from "../../reusables/arrows/arrows";
import "./index.scss";

interface BurgerTitleProps {
  next: string;
  previous: string;
}

interface BurgerTitleState {}

export class BurgerTitle extends React.Component<
  BurgerTitleProps,
  BurgerTitleState
> {
  constructor(props: BurgerTitleProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="radial-page">
        <div className="title-stage">
          <div className="title-element">
            <h1 className="burger-title-shadow">GIANT BURGERS</h1>
            <h1 className="burger-title-light">GIANT BURGERS</h1>
            <h1 className="burger-title-dark">GIANT BURGERS</h1>
          </div>
        </div>
        <ArrowNext uri={this.props.next} />
        <ArrowPrevious uri={this.props.previous} />
      </div>
    );
  }
}
