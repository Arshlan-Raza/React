import './Item.css'

function Item(props) {
    const name = props.name 
    return  (
        <div>
            <p className="name">{name}</p>
            {props.children}
        </div>
        
    );
}

export default  Item;