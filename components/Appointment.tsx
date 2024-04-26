import React, { useState } from 'react';

const AppointmentForm = ({ onSchedule }:{onSchedule:any}) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
      onSchedule({ date, time });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          Time:
          <input type="time" value={time} min="09:00" max="18:00" step="1800" onChange={(e) => setTime(e.target.value)} required />
        </label>
        <button type="submit">Schedule</button>
      </form>
    );
};

export default AppointmentForm;