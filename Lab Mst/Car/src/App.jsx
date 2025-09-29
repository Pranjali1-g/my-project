import { useState } from "react";
import CarList from "./CarList";
import "./App.css";

function App() {
  const [cars, setCars] = useState([
    { id: 1, brand: "Tesla", model: "Model S", price: 800000, theme: "Electric" },
    { id: 2, brand: "BMW", model: "X5", price: 1200000, theme: "Luxury" },
    { id: 3, brand: "Toyota", model: "Corolla", price: 9000000, theme: "Economy" },
    { id: 4, brand: "Ford", model: "Mustang", price: 8550000, theme: "Sports" },
    { id: 5, brand: "Audi", model: "A6", price: 6500000, theme: "Luxury" },
    { id: 6, brand: "Chevrolet", model: "Camaro", price: 7000000, theme: "Sports" }
  ]);

  // Delete car by id
  const deleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  return (
    <div className="container">
      <h1 className="heading">Car List</h1>
      <CarList cars={cars} deleteCar={deleteCar} />
      {cars.length === 0 && <p>No cars available.</p>}
    </div>
  );
}      
export default App;
