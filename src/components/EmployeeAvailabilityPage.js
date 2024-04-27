import React, { useState } from 'react';
import './EmployeeAvailabilityPage.css';

const EmployeeAvailabilityForm = () => {
  const [availability, setAvailability] = useState([
    { day: 'Monday', start: '', end: '', recurring: false },
    { day: 'Tuesday', start: '', end: '', recurring: false },
    { day: 'Wednesday', start: '', end: '', recurring: false },
    { day: 'Thursday', start: '', end: '', recurring: false },
    { day: 'Friday', start: '', end: '', recurring: false },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index][field] = value;
    setAvailability(updatedAvailability);
  };

  const toggleRecurring = (index) => {
    const updatedAvailability = [...availability];
    updatedAvailability[index].recurring = !updatedAvailability[index].recurring;
    setAvailability(updatedAvailability);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit}>
      {availability.map((day, index) => (
        <div key={index}>
          <h4>{day.day}</h4>
          <label>
            Start Time:
            <input
              type="time"
              value={day.start}
              onChange={(e) => handleInputChange(index, 'start', e.target.value)}
            />
          </label>
          <label>
            End Time:
            <input
              type="time"
              value={day.end}
              onChange={(e) => handleInputChange(index, 'end', e.target.value)}
            />
          </label>
          <label>
            Recurring:
            <input
              type="checkbox"
              checked={day.recurring}
              onChange={() => toggleRecurring(index)}
            />
          </label>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeAvailabilityForm;
