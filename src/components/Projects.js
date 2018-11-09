import React, { Component } from "react";
import '../index.css';
import images from '../libs/images';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="projectsSection">
          <p>
            This section is dedicated to view different projects I have worked with.
            <br/>
            Meanwhile, here is a link to my
            <a className="projectLink" href="https://github.com/Elingustafsson?tab=repositories"> Github.</a>
          </p>
        </div>
      </div>
    )
  }
}
