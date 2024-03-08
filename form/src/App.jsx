import { useState } from "react";
import "./App.css";

function App() {

  const [formData , setFormData] = useState({firstName:"",lastName:"",email:"",
country:"India",streetAddress:"",city:"",state:"",postalCode:"" ,comments:false
,candidates:false , offers:false , pushNotification:""})


  function changeHandler(event) {
    const {name,value,checked,type} = event.target;

    setFormData ( prevState => (
      {
        ...prevState,
        [name]:type === "checkbox" ? checked:value
      }
    ))
  }

  function submitHandler(event)  {
    event.preventDefault();
    console.log("Printing the  value of form data");
    console.log(formData);
  }

  return (
   <div className="flex justify-center w-[100vw] h-[100vh]">
      <form className="w-[50vw] h-[100vh] m-5 px-5 rounded-md " onSubmit={submitHandler}>

        <label htmlFor="firstName">First Name</label><br/>
        <input 
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Arshlan"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline w-[25vw] mb-5 mt-2 outline-offset-2 outline-blue-400  rounded-sm"
          />

        <br/><label htmlFor="lastName">Last Name</label><br/>
        <input 
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Raza"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline mb-5 mt-2 outline-offset-2 outline-blue-400  rounded-sm"
          />

        <br/><label htmlFor="email">Email Address</label><br/>
        <input 
          type="text"
          name="email"
          id="email"
          placeholder="arshalanraja@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline mb-5 mt-2 outline-offset-2 outline-blue-400  rounded-sm"
          />

        <br/><label htmlFor="country">Country</label><br/>   

        <select
         name="country" 
         id="country"
         value={formData.country}
         onChange={changeHandler}
         className="outline mb-5 mt-2 outline-offset-2 outline-blue-400  rounded-sm"
         >
         <option value="India">India</option>
         <option value="United States">United States</option>
         <option value="Canada">Canada</option>
         <option value="Mexico">Mexico</option>

         </select>

         <br/><label htmlFor="streetAddress">Street Address</label><br/>
        <input 
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="Kanjiya"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline mb-5 mt-2 outline-offset-2 outline-blue-400  rounded-sm"
          />

        <br/><label htmlFor="city">City</label><br/>
        <input 
          type="text"
          name="city"
          id="city"
          placeholder="Ranchi"
          value={formData.city}
          onChange={changeHandler}
          className="outline mb-5 mt-2 outline-offset-2 outline-blue-400  rounded-sm"
          />

        <br/><label htmlFor="state">State</label><br/>
        <input 
          type="text"
          name="state"
          id="state"
          placeholder="Jharkhand"
          value={formData.state}
          onChange={changeHandler}
          className="outline mb-5 mt-2 outline-offset-2 outline-blue-400  rounded-sm"
          />

        <br/><label htmlFor="postalCode">Postal Code</label><br/>
        <input 
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="83521.."
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline mb-5 mt-2 outline-offset-2 outline-blue-400  rounded-sm"
          />

        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input type="checkbox"
            id="comments"
            name="comments"
            checked={formData.comments}
            onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>
          <div className="flex">
            <input type="checkbox"
            id="candidates"
            name="candidates"
            checked={formData.candidates}
            onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>
          <div className="flex">
            <input type="checkbox"
            id="offers"
            name="offers"
            checked={formData.offers}
            onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or reject an offer.</p>
            </div>
          </div>
          
        </fieldset>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <input type="radio"
          id="pushEverything"
          name="pushNotification"
          value="Everything" 
          onChange={changeHandler}
          
          />

          <label htmlFor="pushEverything">Everything</label><br/>

          <input type="radio"
          id="pushEmail"
          name="pushNotification"
          value="Same as email" 
          onChange={changeHandler}/>

          <label htmlFor="pushEmail">Same as email</label><br/>

          <input type="radio"
          id="pushNothing"
          name="pushNotification"
          value="No Push Notification" 
          onChange={changeHandler}/>

          <label htmlFor="pushNothing">No Push Notification</label>
        </fieldset>

      <button className="bg-blue-500 mx-auto text-white font-bold py-2 rounded-sm
       px-4">Save</button>

      </form>
   </div>
  );
}

export default App;
