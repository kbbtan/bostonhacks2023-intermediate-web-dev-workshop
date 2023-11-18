import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>My Grocery List</h1>

      <Card 
        title="Spring Onions" 
        description="I probably should buy more of them" 
        price="2" 
      />

      <Card 
        title="Salt and Pepper" 
        description="A must for any kitchen" 
        price="5" 
      />

      <Card 
        title="Chicken Thighs" 
        description="Good source of protein" 
        price="8" 
      />
    </div>
  );
}

export default App;
