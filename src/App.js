import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <footer>
      <IconButton href="https://www.linkedin.com/in/edward-vasallo-83a7a6159/" target="_blank" rel="noreferrer">
        <LinkedInIcon />
      </IconButton>
      <IconButton href="https://github.com/EdwardVE" target="_blank" rel="noreferrer">
        <GitHubIcon />
      </IconButton>
        <p>&copy; 2024 Edward Vasallo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
