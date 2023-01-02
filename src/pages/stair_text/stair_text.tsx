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
      <div className="page">
        <div className="list-stage">
            <ul>
                <li className="stair-top"> Une Marche</li>
                <li className="stair-side"> Un côté</li>
                <li className="stair-top-2"> Le bas</li>
            </ul>
        </div>
        <ArrowNext uri={this.props.next} />
        <ArrowPrevious uri={this.props.previous} />
      </div>
    );
  }
}
