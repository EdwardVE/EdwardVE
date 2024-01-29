import { Container, Typography, ListItem, Box } from '@mui/material';
import Project from './Projects/Project';

const Portfolio = () => {
const projects = [
  {
    title: 'E-commerce DigiShoes',
    description: 'Desarrollé una plataforma de venta de calzado con integración de cuentas de Google y pagos a través de MercadoPago.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'Material UI'],
    repository: 'https://github.com/Luis901810/eCommerce_frontend',
    demo: 'https://storecalzado.vercel.app/',
    image: 'https://raw.githubusercontent.com/EdwardVE/EdwardVE/95a419e2147b49f337b586c968ff5c200c374963/src/img/DigiShoes.JPG',
  },
  {
    title: 'World Explorer',
    description: 'Una aplicación que clasifica países y ofrece la posibilidad de ordenarlos según actividades turísticas disponibles.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize'],
    repository: 'https://github.com/EdwardVE/PI_Countries',
  },
];

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Proyectos
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px'  }}>
        {projects.map((project, index) => (
          <ListItem key={index} sx={{ flex: '1 0 100%', margin: '10px' }}>
            <Project projectInfo={project} />
          </ListItem>
        ))}
      </Box>
    </Container>
  );
};

export default Portfolio;
