import { Typography, Link, Paper } from '@mui/material';

const EdwardVE = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h2">EDWARD VASALLO</Typography>
      <Typography variant="subtitle1">Full Stack Web Developer</Typography>
      <Typography>
        Bienvenido a mi espacio en línea como desarrollador. Aquí encontrarás información detallada sobre mí, mi experiencia en el mundo del desarrollo de software y los proyectos en los que he trabajado. Este repositorio sirve como una ventana a mi carrera, donde puedes explorar mis habilidades técnicas, contribuciones a proyectos de código abierto y mi enfoque en el desarrollo de software de alta calidad.
      </Typography>
      <Typography variant="h3">Contacto</Typography>
      <Typography>Email: <Link href="mailto:edwardvasallo@gmail.com">edwardvasallo@gmail.com</Link></Typography>
      <Typography>Dercarga mi CV:</Typography>
      <Typography variant="h3">Redes</Typography>
      <Typography>LinkedIn: <Link href="https://www.linkedin.com/in/edward-vasallo-83a7a6159/">EdwardVE</Link></Typography>
      <Typography>GitHub: <Link href="https://github.com/EdwardVE">EdwardVE</Link></Typography>
    </Paper>
  );
};

export default EdwardVE;
