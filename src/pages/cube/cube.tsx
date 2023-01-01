import Icon from "@mdi/react";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowNext, ArrowPrevious } from "../../reusables/arrows/arrows";
import "./index.scss";

interface CubeProps {
  previous: string
  next: string
}

interface CubeState {}

export class Cube extends React.Component<
  CubeProps,
  CubeState
> {
  constructor(props: CubeProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="stage">
          <div className="cube">
            <figure className="back"></figure>
            <figure className="top"></figure>
            <figure className="bottom"></figure>
            <figure className="left"></figure>
            <figure className="right"></figure>
            <figure className="front"></figure>
          </div>
        </div>
        <ArrowNext uri={this.props.next} />
        <ArrowPrevious uri={this.props.previous} />
      </>
    );
  }
}
