import React, { Component } from "react";
import '../index.css';
import images from '../libs/images';

let {elin, paperplane} = images

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contactMe">
          <img className="profilePic" src={elin}/>
            <h3 className="contactText">Hit me up at</h3>
            <a className="mailToMe" href="mailto:elgusen@hotmail.com">mail</a>
            <a href="mailto:elgusen@hotmail.com">
              <img className="paperplane" src={paperplane}/>
            </a>
        </div>
      </div>
    )
  }
}
