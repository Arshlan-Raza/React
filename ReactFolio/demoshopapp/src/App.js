import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate.js'
import Card from './components/Card.js'

function App() {
  const response = [
    {
      itemName:"Nirma",
      itemDay: "2",
      itemMonth:"Oct",
      itemYear:"1998"
    },
    {
      itemName:"SurfExcel",
      itemDay: "22",
      itemMonth:"Sept",
      itemYear:"2002"
    },
    {
      itemName:"555",
      itemDay: "3",
      itemMonth:"Aug",
      itemYear:"1997"
    },
  ]
  return (
    <Card>
    <div>
      <Item name= {response[0].itemName}>kaise hai aaplog</Item>
      <ItemDate date = {response[0].itemDay} month ={response[0].itemMonth} year={response[0].itemYear} ></ItemDate> 

      <Item name= {response[1].itemName}></Item>
      <ItemDate date = {response[1].itemDay} month ={response[1].itemMonth} year={response[1].itemYear} ></ItemDate> 

      <Item name= {response[2].itemName}></Item>
      <ItemDate date = {response[2].itemDay} month ={response[2].itemMonth} year={response[2].itemYear} ></ItemDate> 

      <div className="App">hello jee saare
      </div>
    </div>
    </Card>

  );
}

export default App;
