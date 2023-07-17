import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [text, setText] = useState("");
  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }
  // Variation 1 for every render
  // useEffect(()=>{
  //   console.log("Rendered Successfully");
  // });

  // Variation 2 - for first render
  // useEffect(()=>{
  //   console.log("Event rendered")
  // },[]);

  // variation 3 - for first render and when dependency changes
  // useEffect(()=>{
  //   console.log("change rendered")
  // },[text]);

  // Variation 4 - to handle unmounting of a component
  useEffect(()=>{
    console.log("Event added")

    return () =>{
      console.log("Event removed")
    }
  });


  return (
    <div className="App">
      <input onChange={changeHandler}></input>
    </div>
  );
}

export default App;
