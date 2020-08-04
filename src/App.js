import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./Components/Display"
import UserInput from "./Components/UserInput"
import NewElement from "./Components/NewElement"
function App() {
  return (
    <div className="App">
      <Display />
      <UserInput />
      <NewElement />
    </div>
  );
}

export default App;
