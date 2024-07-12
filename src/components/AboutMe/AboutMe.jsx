import { Link, Typography, Container, Box, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutMe = () => {
  return (
    <Container>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <Typography variant="h4">Sobre mí</Typography>
        <Typography>
          Bienvenido a mi espacio en línea como desarrollador. Aquí encontrarás información detallada sobre mí, mi experiencia en el mundo del desarrollo de software y los proyectos en los que he trabajado.
        </Typography>

        <Typography>
          Actualmente estudio ingeniería mecatrónica en la Universidad Nacional de Colombia y busco ampliar mi campo laboral en el desarrollo web.
        </Typography>

        <Typography>
          Si quieres ponerte en contacto conmigo, escríbeme a: <Link href="mailto:edwardvasallo@gmail.com">edwardvasallo@gmail.com</Link>
        </Typography>

          
      
        Ver mis proyectos en GitHub<IconButton href="https://github.com/EdwardVE" target="_blank" rel="noreferrer">
        <GitHubIcon />
      </IconButton>
      </Box>
    </Container>
  );
};

export default AboutMe;
