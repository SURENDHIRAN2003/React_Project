import React from 'react';
//import { BrowserRouter,Routes,Route,Router,Link} from 'react-router-dom';
import Header from './Components/Header';
import MedicineList from './Components/MedicineList';
import Cart from './Components/Cart';
//import {Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (

      <div className="App">
      <Login/>
      <Register/>
      <Header/>
      <MedicineList/>
      <Cart/>
      </div>
  );
}

export default App;