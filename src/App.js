import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurantlist from './components/Restaurantlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewRest from './components/ViewRest';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Routes>
          {/* Path setting for restaurant list */}
          <Route path='/' element={<Restaurantlist></Restaurantlist>
          }></Route>

          {/* Path setting for view restaurants */}
          <Route path='/view-restaurant/:id' element={<ViewRest></ViewRest>}></Route>
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
