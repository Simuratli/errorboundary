import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useErrorBoundary} from 'react-error-boundary'

function App() {


  


  const fetchCartItems = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const products = await response.json();
    if(response.ok){
      return products
    }else{
      //Simulate error throwing...
    console.error("Cannot fetch products. Server is Down!");
    throw new Error("Cannot fetch products. Server is Down!");
    }
  };


  const [first, setCartItems] = useState(null)
  // const {showBoundary} = useErrorBoundary()


  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await fetchCartItems();
        setCartItems(items);
      } catch (err) {
        // showBoundary(err);
        throw new Error("We have error")
      }
    };
    fetchItems();


  }, [])
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
