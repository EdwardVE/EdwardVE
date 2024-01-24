import { Typography, Link, Paper, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const EdwardVE = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h2">EDWARD VASALLO</Typography>
      <Typography variant="subtitle1">Full Stack Web Developer</Typography>

      <Typography variant="h3">Contacto</Typography>
      <Typography>Si quieres ponerte en contacto conmigo escríbeme: <Link href="mailto:edwardvasallo@gmail.com">edwardvasallo@gmail.com</Link></Typography>
      <Typography>Dercarga mi CV:<Link href="https://drive.google.com/file/d/1JMk2yUfmLfj51dncn0Es2KW0UZZ0dGu2/view" target="_blank" rel="noreferrer">
            Ver mi CV
          </Link></Typography>
      
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
