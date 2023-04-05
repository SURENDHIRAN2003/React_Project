import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/medicines').then((response) => {
      setMedicines(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Medicines</h2>
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine.id}>
            {medicine.name} - {medicine.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;