import React from "react";
import { ArrowNext, ArrowPrevious } from "../../reusables/arrows/arrows";
import "./index.scss";

interface TextProps {
  previous: string;
  next: string;
}

interface TextState {}

export class Text extends React.Component<TextProps, TextState> {
  constructor(props: TextProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page">
        <div className="stage">
          <div className="card card-a">
            <h1>Un problème ?</h1>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              repellendus perferendis libero suscipit vitae in rem temporibus?
            </div>
            <div className="links">
              <a href="https://qwant.com" target="_blank" rel="noreferrer noopener" className="a-a">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="stage">
          <div className="card card-b">
            <h1>Hello world...</h1>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              repellendus perferendis libero suscipit vitae in rem temporibus?
            </div>
            <div className="links">
              <a href="https://qwant.com" target="_blank" rel="noreferrer noopener" className="a-b">
                qwant
              </a>
            </div>
          </div>
        </div>
        <div className="stage">
          <div className="card card-c">
            <h1>La solution !</h1>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              repellendus perferendis libero suscipit vitae in rem temporibus?
            </div>
            <div className="links">
              <a href="https://qwant.com" target="_blank" rel="noreferrer noopener" className="a-c">
                S'inscrire
              </a>
            </div>
          </div>
        </div>
        <ArrowPrevious uri={this.props.previous} />
        <ArrowNext uri={this.props.next} />
      </div>
    );
  }
}
