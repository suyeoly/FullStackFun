import React from 'react';
import './App.css';
import Header from './Header';
import FoodList from './Food/FoodList';

function App() {
  return (
    <div className="App">
      <Header title="Full Stack Developer BYUB" />
      <FoodList />
    </div>
  );
}

export default App;
