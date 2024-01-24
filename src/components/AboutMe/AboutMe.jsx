import { Link, Typography, Paper, Container, Button } from "@mui/material";

const AboutMe = () => {
  return (
    <Container
      style={{
        padding: '16px',
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '32px',
      }}
      component={Paper}
      elevation={3}
    >
      <Typography variant="h4">Sobre mí</Typography>
      <Typography>
        Bienvenido a mi espacio en línea como desarrollador. Aquí encontrarás información detallada sobre mí, mi experiencia en el mundo del desarrollo de software y los proyectos en los que he trabajado. Este repositorio sirve como una ventana a mi carrera, donde puedes explorar mis habilidades técnicas, contribuciones a proyectos y mi enfoque en el desarrollo de software de alta calidad.
      </Typography>
      <Typography>
        Actualmente estudio ingeniería mecatrónica en la Universidad Nacional de Colombia y busco ampliar mi campo laboral en el desarrollo web.
      </Typography>
      <Typography>
        Si quieres ponerte en contacto conmigo, escríbeme a: <Link href="mailto:edwardvasallo@gmail.com">edwardvasallo@gmail.com</Link>
      </Typography>
      <Button
        style={{ marginTop: '16px' }}
        variant="contained"
        color="primary"
        href="https://github.com/EdwardVE"
        target="_blank"
        rel="noreferrer"
      >
        Ver mis proyectos en GitHub
      </Button>
    </Container>
  );
};

export default AboutMe;
