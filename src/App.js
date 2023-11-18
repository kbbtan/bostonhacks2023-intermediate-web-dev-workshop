import './App.css';
import Card from './Card';

import { useState } from 'react';

function App() {
  const [groceries, setGroceries] = useState([
    {
      title: "Tofu",
      description: "Good for soup",
      price: "5"
    },
    {
      title: "Salt and Pepper",
      description: "A must for any kitchen",
      price: "5"
    },
    {
      title: "Chicken Thighs",
      description: "Good source of protein",
      price: "8"
    }
  ]);

  return (
    <div className="App">
      <h1>My Grocery List</h1>

      {groceries.map((grocery) => {
        return <Card 
          title={grocery.title} 
          description={grocery.description} 
          price={grocery.price} 
        />
      })}
    </div>
  );
}

export default App;
