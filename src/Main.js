import React from 'react';
import Navbar from "./components/Navbar";
import FirstContent from "./components/FirstContent";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css';

export default class Main extends React.Component {

    render() {
      return (
        <div>
          <Navbar />
          <FirstContent />
          <Contact />
          <Projects />
          <Footer />
        </div>
     )
    }
}
