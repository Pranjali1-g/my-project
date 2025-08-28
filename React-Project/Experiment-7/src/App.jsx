import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './ProductCard'

function App() {
  return (
    <>
      <h2 style={{ marginBottom: "2rem" }}>Products List</h2>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <ProductCard product={{name: "Laptop", price: 999, status: "In Stock"}} />
        <ProductCard product={{name: "Headphones", price: 199, status: "Out of Stock"}} />
        <ProductCard product={{name: "Smartphone", price: 799, status: "In Stock"}} />
      </div>
    </>
  )
}

export default App
