import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { IconButton, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {//!
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
        <IconButton href="https://www.linkedin.com/in/edward-vasallo-83a7a6159/" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://github.com/EdwardVE" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </IconButton>
        <Typography variant="body2">&copy; 2024 Edward Vasallo. Todos los derechos reservados.</Typography>
      </footer>
    </div>
  );
}

export default App;