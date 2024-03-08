import './App.css';
import { useState } from 'react';

function App() {

  const  [formData,setFormData] = useState({firstName:"",lastName:""
  ,email:"",comments:"",isVisible:true, mode:"",favCar:""});

  function changeHandler(event){
    const {name , value , type ,checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value  
      }
    })
  }

  function submitHandler (event){
    event.preventDefault();
    console.log("Finally printing the entire form")
    console.log(formData);
  }


  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <br/><br/>
        <input
        type = "text" placeholder='first Name'
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}
        >
        </input>

        <br/><br/>
        <input
        type = "text" placeholder='last Name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
        >
        </input>

        <br/><br/>
        <input
        type = "email" placeholder='enter your email'
        onChange={changeHandler}
        name='email'
        value={formData.email}
        >
        </input>

        <br/><br/>
        <textArea
        placeholder='enter your text'
        onChange={changeHandler}
        name='comments'
        value={formData.comments}
        />


      <br/><br/>  
      <input
        type='checkbox'
        onChange={changeHandler}
        name='isVisible'
        is='isVisible'
        checked = {formData.isVisible}>
      </input>

      <label
      htmlFor='isVisible'>Am i Visible?</label>
        
    
        <br/><br/> 

        <fieldset>
          <legend>Mode:</legend>  
          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value = "Online-Mode"
            id='Online-Mode'
            checked = {formData.mode === "Online-Mode"}>
          </input>

          <label htmlFor='Online-Mode'>Online Mode</label>

          <input
          type='radio'
          onChange={changeHandler}
          name='mode'
          value = "Offline-Mode"
          id='Offline-Mode'
          checked = {formData.mode === "Offline-Mode"}>
          </input>

          <label htmlFor='Offline-Mode'>Offline Mode</label>
          
        </fieldset> 


        <br/><br/>
        <label htmlFor='favCar'>Tell me your favorite Car</label>
        <select
        name='favCar'
        id='favCar'
        value={formData.favCar}
        onChange={changeHandler}
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Thar">Thar</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
          
        </select>

      <br/><br/>
      {/* <input type='submit' value='submit'></input>         */}

      <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
