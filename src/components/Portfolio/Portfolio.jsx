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
  },
  {
    title: 'World Explorer',
    description: 'Una aplicación que clasifica países y ofrece la posibilidad de ordenarlos según actividades turísticas disponibles.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize'],
    repository: 'https://github.com/EdwardVE/PI_Countries',
  },
  // Agrega más proyectos según sea necesario
  {
    title: 'Social Media Dashboard',
    description: 'Desarrollé una aplicación de panel de control para gestionar publicaciones en redes sociales.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Material UI'],
    repository: 'https://github.com/tu-usuario/social-media-dashboard',
    demo: 'https://social-dashboard-demo.com/',
  },
  {
    title: 'Weather App',
    description: 'Una aplicación para consultar el pronóstico del tiempo basado en la ubicación del usuario.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'OpenWeatherMap API', 'CSS'],
    repository: 'https://github.com/tu-usuario/weather-app',
  },
  {
    title: 'Task Manager',
    description: 'Desarrollé una aplicación para gestionar tareas y recordatorios.',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    repository: 'https://github.com/tu-usuario/task-manager-app',
    demo: 'https://task-manager-demo.com/',
  },
  {
    title: 'Recipe Finder',
    description: 'Una aplicación para encontrar recetas culinarias basadas en ingredientes disponibles.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'Edamam API', 'CSS'],
    repository: 'https://github.com/tu-usuario/recipe-finder',
  },
  {
    title: 'Fitness Tracker',
    description: 'Desarrollé una aplicación para realizar un seguimiento de las rutinas de ejercicio y el progreso físico.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Material UI'],
    repository: 'https://github.com/tu-usuario/fitness-tracker-app',
  },
  {
    title: 'Bookshelf',
    description: 'Una aplicación para organizar y gestionar una colección de libros.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Material UI'],
    repository: 'https://github.com/tu-usuario/bookshelf-app',
  },
  {
    title: 'Event Planner',
    description: 'Desarrollé una aplicación para planificar y gestionar eventos.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Material UI'],
    repository: 'https://github.com/tu-usuario/event-planner-app',
    demo: 'https://event-planner-demo.com/',
  },
  {
    title: 'Chat Application',
    description: 'Una aplicación de chat en tiempo real para comunicarse con otros usuarios.',
    technologies: ['React', 'Redux', 'Node.js', 'Socket.io', 'CSS'],
    repository: 'https://github.com/tu-usuario/chat-app',
    demo: 'https://chat-app-demo.com/',
  },
  {
    title: 'Portfolio Website',
    description: 'Desarrollé mi sitio web personal como portafolio para mostrar mis proyectos y habilidades.',
    technologies: ['React', 'Material UI', 'CSS'],
    repository: 'https://github.com/tu-usuario/portfolio-website',
    demo: 'https://portfolio-demo.com/',
  },
  {
    title: 'E-learning Platform',
    description: 'Una plataforma de aprendizaje en línea con cursos y material educativo.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Material UI'],
    repository: 'https://github.com/tu-usuario/elearning-platform',
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
