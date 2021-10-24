import React from 'react';
import './App.css';
import { CardContainer } from './components/CardContainer';



function App() {
  const data = [
    {name: "Jose"},
    {name: "Britt"},
    {name: "Matt"},
    {name: "Dustin"},
    {name: "Justin"},
    {name: "Kayla"},
    {name: "Deanna"},
    {name: "Cameron"},
    {name: "Tim"},
    {name: "Ron"},
    {name: "Jamie"},
    {name: "Brande"},
    {name: "Jordan"},
    {name: "Xavier"},
  ]
  return (
    <div className="App">
      <CardContainer data={data}/>
    </div>
  );
}

export default App;
