import React from 'react';
import './App.css';
import ProductTable from './ProductTable.js';



const products=[{name:'laptop',category:'electronics',price:1300},
                {name:'Tshirt',category:'clothes',price:40},
                {name:'Car',category:'toys',price:25}]


function App() {
  return (
    <div>
    <ProductTable products={products}/>
    </div>
  );
}

export default App;
