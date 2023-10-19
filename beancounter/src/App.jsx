
import './App.css'
import { useState } from 'react'
function App() {
  const [price, setPrice] = useState(0); 
  const [drink, setDrink] = useState(''); 
  const [shot, setShot] = useState(0); 
  const [basePrice, setBasePrice] = useState(0);  // New state to hold base price


  const handleClear = () => {
    setPrice(0); 
    setDrink(''); 
    setShot(0);
    setBasePrice(0);  // Clear base price too

  }
  const handleSize = (size) => {
    if(drink){
      setPrice(basePrice * size + shot); 
    }
  }

  const handleDrink = (selectedDrink, drinkPrice) => {
    setDrink(selectedDrink);
    setBasePrice(drinkPrice);  // Set base price when a drink is selected
    setPrice(drinkPrice);  // Reset the price to the base price of the new drink

  }
  const handleShot = (shots) => {
    setShot(shots + shot)
    setPrice(price + shot); 
  }
  return (
    <>
    <h1 id="title">the bean counter</h1>
    <hr width="50%"/>
    <h2 id="sub-title">Figuring out espresso prices.</h2>
    <h3>$1 for each extrashot of espresso! </h3>
    <h3>If selecting espresso, size not necessary. just select how many shots you would like</h3>
    <h3>Espresso shots per drink:</h3>
    <h3>Latte: T = 1 SHOT G = 2 SHOTS V = 2 SHOTS</h3>
    <h3>Cappuccino: T = 1 SHOTS G = 2 SHOTS V = 2 SHOTS</h3>
    <h3>Americano: T = 2 SHOTS G = 3 SHOTS V = 4 SHOTS</h3>
    <h3>Espresso: 3 shots </h3>
    <div className='center-table'>

    {drink == '' ? <p id="drink-condition">Please select a drink!</p> : null}
    <br/>
    <table >
      <tr>
        <td>
          <button onClick = {() => handleShot(1)}>1</button>
        </td>
        <td>
          <button onClick ={() => handleSize(0.75)}>T</button>
        </td>
        <td>
          <button onClick = {() => handleDrink("ESPRESSO", 2.75)}>ESPRESSO</button>
        </td>
        <td>
          <button onClick = {handleClear}>CLEAR</button>
        </td>
      </tr>  
      <tr>
        <td>
          <button onClick = {() => handleShot(2)}>2</button>
        </td>
        <td>
          <button onClick ={() => handleSize(1)}>G</button>
        </td>
        <td>
          <button onClick = {() => handleDrink("LATTE", 5.25)}>LATTE</button>
        </td>
        <td>
          
        </td>
      </tr> 
      <tr>
        <td>
          <button onClick = {() => handleShot(3)}>3</button>
        </td>
        <td>
          <button onClick ={() => handleSize(1.25)}>V</button>
        </td>
        <td>
          <button onClick = {() => handleDrink("CAPPUCINO", 5.50)}>CAPPUCINO</button>
        </td>
        <td>
          <button >TOTAL</button> 
        </td>
      </tr> 
      <tr>
        <td>
         <button>4</button>
        </td>
        <td>
          
        </td>
        <td>
          <button onClick = {() => handleDrink("AMERICANO", 3.50)}>AMERICANO</button>
        </td>
        <td>
          <button>{price}</button>
        </td>
      </tr>   
    </table>  


    {drink ? <div>You selected a {drink} with {shot} extra shots</div>
    : null}

    {shot >= 6 ? <p>Youre gonna get a heart attack my dude o_o</p> : null}
    </div>  
    </>
  )
}

export default App
                                        