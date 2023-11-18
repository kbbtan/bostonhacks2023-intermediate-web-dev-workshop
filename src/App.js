import './App.css';
import Card from './Card';

import { useState } from 'react';
import { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, Timestamp, deleteDoc, doc } from 'firebase/firestore/lite';
import FirebaseConfig from "./firebase.js";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';


const app = initializeApp(FirebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
const getGroceries = async(db) => {
  const groceries = collection(db, 'groceries');
  const out = await getDocs(groceries);
  // const groceryList = out.docs.map(doc => ({ id: doc.id, data: doc.data() }));
  return out;
}

const createGrocery = async(db, data) => {
  try {
    await addDoc(collection(db, 'groceries'), {
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      completed: false,
      created: Timestamp.now()
    })
  } catch (err) {
    alert(err)
  }
}

function App() {
  const [groceries, setGroceries] = useState([]);
  const [formFields, setFormFields] = useState({
    name: "",
    quantity: 1,
    price: 0,
    completed: false
  })

  useEffect(() => {

    const fetchGroceries = async() => {
      let out = await getGroceries(db);
      
      setGroceries(out.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )));
      console.log();
    } 

    fetchGroceries();
  }, [groceries])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields(prevFields => ({
      ...prevFields,
      [name]: value
    }));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await createGrocery(db, formFields, () => setFormFields({
      name: "",
      quantity: 1,
      price: 0,
      completed: false
    }));
  }


  return (

    <div className="App">
      <h1>My Grocery List</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formFields.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" name="quantity" value={formFields.quantity} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={formFields.price} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Add Grocery</button>
      </form>

      {groceries.map((grocery) => {
        return <Card 
          id={grocery.id}
          title={grocery.data.name} 
          description={grocery.data.quantity} 
          price={grocery.data.price} 
          db={db}
        />
      })}
    </div>
  );
}

export default App;
