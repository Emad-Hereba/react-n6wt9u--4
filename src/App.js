import React from "react";
import Navbar from './components/Navbar';
import {CartContainer} from './components/CartContainer';

function App() {
  return (
    <main>
       <h1>Redux toolKit by Emad Hereba</h1>
      <Navbar/>
      <CartContainer />
    </main>
  );
}
export default App;