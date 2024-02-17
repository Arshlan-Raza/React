import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [text , setText] = useState('');

  // variation 1 -> every render 
  // useEffect(() =>{

  //   console.log("UI rendering done bro...")

  // });

  // variation 2 -> first render 
  // useEffect(() =>{

  //   console.log("UI rendering done bro...")

  // },[]);

  // variation 3 -> whenever dependency changes   
  useEffect(() =>{

    console.log("Change Observed");

  },[text]);

    // variation 4 -> to handle unmounting of a component
    useEffect(() =>{

      console.log("listener added");  // uske bad ye chalega 

      return () => {
        console.log("listener removed");    // pehle ye line chalegi 
      }

    },[text]);

  function changeHandler(event) {

      console.log(text);
      setText(event.target.value);
       
  }

  return (
    <div className="App">
     <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
