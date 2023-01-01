import * as React from 'react';
import './App.css';
import { Cube } from './pages/cube/cube';
import { Text } from './pages/text/text';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

 
export class App extends React.Component {
  render() { 
    return ( 
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cube next='/cards' previous='/cards'/>} />
          <Route path="/cards" element={<Text next="/" previous='/'/>} />
        </Routes>
      </BrowserRouter>
    </>
     );
  }
}