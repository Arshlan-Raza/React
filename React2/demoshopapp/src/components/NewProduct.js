import './NewProduct.css';
import ProductForm from './ProductForm';

function NewProduct (props) {

    function saveProduct(data) {
        console.log("inside the new product");
        console.log(data);

        props.arshlan(data)
    }
    return (
        <div className='new-product' >
            <ProductForm onSaveProduct = {saveProduct} />
        </div>
    );
}

export default NewProduct;