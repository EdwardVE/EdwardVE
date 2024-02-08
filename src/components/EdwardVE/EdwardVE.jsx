import { Typography, Link, IconButton, Container, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { handleDownloadCV } from '../Contact/Contact';
import DownloadIcon from '@mui/icons-material/Download';

const EdwardVE = () => {
  return (
    <Container>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <Typography variant="h2">EDWARD VASALLO</Typography>
        <Typography variant="subtitle1">Full Stack Web Developer</Typography>

        <Typography variant="h3">Contacto</Typography>
        <Typography>
          Si quieres ponerte en contacto conmigo escríbeme:{' '}
          <Link href="mailto:edwardvasallo@gmail.com">edwardvasallo@gmail.com</Link>
        </Typography>
        <Typography>
          Descarga mi CV
          <IconButton onClick={handleDownloadCV} color="primary" aria-label="Descargar CV">
            <DownloadIcon />
          </IconButton>
        </Typography>

        <Typography variant="h3">Redes</Typography>
        <Box
          sx={{

          }}
        >
          <IconButton href="https://www.linkedin.com/in/edward-vasallo-83a7a6159/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </IconButton>
          <IconButton href="https://github.com/EdwardVE" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default EdwardVE;
