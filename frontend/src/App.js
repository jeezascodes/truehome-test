import React,{useEffect, useState} from 'react';
import './App.css';

const App = () => {

  useEffect(() => {
    getRealstate();
  }, []);

  const getRealstate = async () => {
    const response = await fetch('http://localhost:3000/posts/');
    const data = await response.json();
    console.log(data[0].title);
  }

  return(
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
}

export default App;
