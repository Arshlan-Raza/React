import {useState} from 'react';
import "./ProductForm.css";

function ProductForm(props) {

    // const [fullProductInput , setFullProductInput] = useState ({
    //         title:'',
    //         date:'',
    // });

    // function setFullProductInput() {
    //     //return object with updated parameters
    // }

    const [newTitle , setTitle] = useState('');
    const [newDate , setDate]  = useState('');


    function titleChangeHandler(event){
        setTitle(event.target.value);
    
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
      
    }

    function submitHandler(event) {
        event.preventDefault();

        const ProductData = {
            title:newTitle,
            date:newDate,
        }

        // console.log(ProductData);
        props.onSaveProduct(ProductData);
        setTitle('');
        setDate('');
    }

  return (

   
    <form className="new-product__controls" onSubmit={submitHandler}>
      <div className="new-product__title">
        <label>Title</label>
        <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
      </div>
      <div className="new-product__date">
        <label>Date</label>
        <input type="date" value={newDate} min="2023-01-01"  max="2023-12-12" onChange={dateChangeHandler}></input>
      </div>
      <div className="new-product__button">
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
}
export default ProductForm;