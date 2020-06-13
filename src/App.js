import React from 'react';
import Container from '@material-ui/core/Container';
import Linking from './Routes/Links/Linking'
import Routing from './Routes/Route'
import Footer from './Components/Small/Footer'
import './App.css';

function App() {
  return (
    <Container style={containerStyle}>
      <Linking/>
      <Routing/>
      
    </Container>
  );
}

const containerStyle = {
  margin : '0 !important',
  padding : 0,
  width : '100%'
}

export default App;

