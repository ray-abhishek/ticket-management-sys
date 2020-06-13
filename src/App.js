import React from 'react';
import Container from '@material-ui/core/Container';
import Linking from './Routes/Links/Linking'
import Routing from './Routes/Route'
import Footer from './Components/Small/Footer'
import './App.css';

function App() {
  return (
    <Container>
      <Linking/>
      <Routing/>
      
    </Container>
  );
}

export default App;

