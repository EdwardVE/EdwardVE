import { Typography, Link, Paper, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { handleDownloadCV } from '../Contact/Contact';
import DownloadIcon from '@mui/icons-material/Download';

const EdwardVE = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h2">EDWARD VASALLO</Typography>
      <Typography variant="subtitle1">Full Stack Web Developer</Typography>

      <Typography variant="h3">Contacto</Typography>
      <Typography>Si quieres ponerte en contacto conmigo escríbeme: <Link href="mailto:edwardvasallo@gmail.com">edwardvasallo@gmail.com</Link></Typography>
      <Typography>Dercarga mi CV
      <IconButton onClick={handleDownloadCV} color="primary" aria-label="Descargar CV">
        <DownloadIcon />
      </IconButton>
    </Typography>
      
      <Typography variant="h3">Redes</Typography>
      <IconButton href="https://www.linkedin.com/in/edward-vasallo-83a7a6159/" target="_blank" rel="noreferrer">
        <LinkedInIcon />
      </IconButton>
      <IconButton href="https://github.com/EdwardVE" target="_blank" rel="noreferrer">
        <GitHubIcon />
      </IconButton>
    </Paper>
  );
};

export default EdwardVE;
