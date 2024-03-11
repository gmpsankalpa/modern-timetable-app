// TimetableDay.js
import React from 'react';
import TimetableSlot from './TimetableSlot';

const timeSlots = ['9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', /*...*/];

function TimetableDay({ day }) {
  return (
    <div style={{ width: '200px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', color: '#1976D2' }}>{day}</h2>
      {timeSlots.map((timeSlot, index) => (
        <TimetableSlot key={index} day={day} timeSlot={timeSlot} />
      ))}
    </div>
  );
}

export default TimetableDay;
