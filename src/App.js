import {Component} from 'react';
import './App.css';
// import React from 'React';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import rawData from './beastObjects.json';
import BeastModal from './components/BeastModal';
import {Container} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      showModal: false,
      allBeasts: rawData,
    };
  }


  displayAsModal = name => {
    const clickedBeast = rawData.find(beast => beast.title === name);
    this.setState({ showModal: true, selectedBeast: clickedBeast });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  updateBeastGallery = filteredBeastArr => {
    this.setState({ allBeasts: filteredBeastArr });
  };

  render() {
    return (
      <Container fluid>
        <Header />
        <Main
          allBeasts={this.state.allBeasts}
          displayAsModal={this.displayAsModal}
          updateBeastGallery={this.updateBeastGallery}
        />
        <BeastModal
          showModal={this.state.showModal}
          selectedBeast={this.state.selectedBeast}
          handleClose={this.handleClose}
        />
        <Footer />
      </Container>
    );
  }
}

export default App;


