import React, { Component } from "react";
import '../index.css';
import images from '../libs/images';

let {arrow} = images

export default class FirstContent extends Component {
  render() {
    return (
      <div>
      <div className="arrow">
        <img className="arrowLeft" src={arrow}/> <p>I'm pretty simple, so this is a lot more room that I need</p> <img className="arrowRight" src={arrow}/>
      </div>
        <div className="abouteMe">
          <h3>MEET</h3>
          <h1>ELIN</h1>
          <p>
            Web developer based in Stockholm, Sweden.
          <br />
            Happy, curious girl with a major weakness for coffee.
          <br />
            Raised by the 90's there my mom yelled at me -"GET OF THE INTERNET ELIN, I need to make a phone call!"
          </p>
        </div>
      </div>
    )
  }
}
