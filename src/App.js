// App.js
import React from 'react';
import Timetable from './Timetable';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <h1 style={{ textAlign: 'center', color: '#1976D2' }}>Modern Timetable App</h1>
        <Timetable />
      </Container>
    </React.Fragment>
  );
}

export default App;
