import * as React from "react";
import { ArrowNext, ArrowPrevious } from "../../reusables/arrows/arrows";
import "./index.scss";

interface StairTextProps {
  next: string;
  previous: string;
}

interface StairTextState {}

export class StairText extends React.Component<StairTextProps, StairTextState> {
  constructor(props: StairTextProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="window-page">
        <div className="window-stage">
          <h1>Having fun with CSS</h1>
        </div>
        <ArrowNext uri={this.props.next} />
        <ArrowPrevious uri={this.props.previous} />
      </div>
    );
  }
}
