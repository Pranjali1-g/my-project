import "./App.css";

function CarCard({ car, deleteCar }) {
  return (
    <li className="list-item">
      <div>
        <strong>{car.brand} {car.model}</strong> — ${car.price} ({car.theme})
      </div>
      <button className="delete-btn" onClick={() => deleteCar(car.id)}>
        Delete
      </button>
    </li>
  );
}

export default CarCard;
