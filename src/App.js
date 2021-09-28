
import './App.css';
import {Component} from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import beastBios from './data.json';

function App() {
  return (
    <Container>
      <Header title="Horned Beasts" />
      <Main message="Pick a Beast" beastBios={beastBios}/>
      <Footer text="Author: Valton Jones" />
    </Container>
  );
}


export default App;







