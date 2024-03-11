// Timetable.js
import React from 'react';
import TimetableDay from './TimetableDay';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

function Timetable() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
      {daysOfWeek.map((day, index) => (
        <TimetableDay key={index} day={day} />
      ))}
    </div>
  );
}

export default Timetable;
