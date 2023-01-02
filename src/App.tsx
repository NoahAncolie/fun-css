import * as React from 'react';
import './App.css';
import { Cube } from './pages/cube/cube';
import { Text } from './pages/text/text';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StairText   } from './pages/stair_text/stair_text';
import { BurgerTitle } from './pages/burger_title/burger';

 
export class App extends React.Component {
  render() { 
    return ( 
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cube next='/cards' previous='/burger_title'/>} />
          <Route path="/cards" element={<Text next="/stair_text" previous='/'/>} />
          <Route path="/stair_text" element={<StairText  next="/burger_title" previous="/cards"/>} />
          <Route path="/burger_title" element={<BurgerTitle next="/" previous="/stair_text" />} />
        </Routes>
      </BrowserRouter>
    </>
     );
  }
}