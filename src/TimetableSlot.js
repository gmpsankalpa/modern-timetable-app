// TimetableSlot.js
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { TwitterPicker } from 'react-color'; // Install with: npm install react-color

function TimetableSlot({ day, timeSlot }) {
  const [eventName, setEventName] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventColor, setEventColor] = useState('#1976D2');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const savedEvent = JSON.parse(localStorage.getItem(`${day}-${timeSlot}`));
    if (savedEvent) {
      setEventName(savedEvent.eventName);
      setEventTime(savedEvent.eventTime);
      setEventColor(savedEvent.eventColor || '#1976D2');
    }
  }, [day, timeSlot]);

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
    setShowAlert(false);
  };

  const handleEventTimeChange = (e) => {
    setEventTime(e.target.value);
    setShowAlert(false);
  };

  const handleColorChange = (color) => {
    setEventColor(color.hex);
    setShowAlert(false);
  };

  const saveToLocalStorage = () => {
    localStorage.setItem(
      `${day}-${timeSlot}`,
      JSON.stringify({ eventName, eventTime, eventColor })
    );
    setShowAlert(true);
  };

  const clearLocalStorage = () => {
    localStorage.removeItem(`${day}-${timeSlot}`);
    setEventName('');
    setEventTime('');
    setEventColor('#1976D2');
    setShowAlert(false);
  };

  return (
    <Card
      elevation={3}
      style={{
        marginBottom: '20px',
        borderRadius: '10px',
        backgroundColor: day === getCurrentDay() ? '#f3f3f3' : 'white',
      }}
    >
      <CardContent>
        <TextField
          fullWidth
          label="Event Name"
          variant="outlined"
          value={eventName}
          onChange={handleEventNameChange}
        />
        <TextField
          fullWidth
          label="Event Time"
          variant="outlined"
          value={eventTime}
          onChange={handleEventTimeChange}
          style={{ marginTop: '10px' }}
        />
        <TwitterPicker
          color={eventColor}
          onChangeComplete={(color) => handleColorChange(color)}
          triangle="hide"
          width="100%"
          style={{ marginTop: '10px' }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '10px', marginRight: '10px' }}
          onClick={saveToLocalStorage}
        >
          Save
        </Button>
        <IconButton color="secondary" onClick={clearLocalStorage} style={{ marginTop: '10px' }}>
          <DeleteIcon />
        </IconButton>
        <IconButton color="primary" style={{ marginTop: '10px', float: 'right' }}>
          <EditIcon />
        </IconButton>
        {showAlert && (
          <Alert severity="success" style={{ marginTop: '10px' }}>
            <AlertTitle>Event Saved Successfully!</AlertTitle>
            Your event has been saved.
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}

const getCurrentDay = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  return daysOfWeek[currentDate.getDay()];
};

export default TimetableSlot;
