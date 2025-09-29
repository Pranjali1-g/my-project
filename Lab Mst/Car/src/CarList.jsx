import CarCard from "./CarCard";
import "./App.css";

function CarList({ cars, deleteCar }) {
  return (
    <ul className="scroll-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} deleteCar={deleteCar} />
      ))}
    </ul>
  );
}

export default CarList;
