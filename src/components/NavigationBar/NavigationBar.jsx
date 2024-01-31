import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const NavigationBar = ({
  homeRef,
  aboutMeRef,
  portfolioRef,
  educationRef,
  skillsRef,
  contactRef,
}) => {


  const scrollToComponent = (ref) => {
    const navbarHeight = 75 /* ajusta la altura de tu barra de navegación */
    const elementPosition = ref.current.offsetTop - navbarHeight;
  
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };
  

  return (
    <AppBar position="fixed" color="primary" >
      <Toolbar>
        <Button color="inherit" onClick={() => scrollToComponent(homeRef)}>
          <Typography variant="subtitle1">Edward VE</Typography>
        </Button>
        <Button color="inherit" onClick={() => scrollToComponent(aboutMeRef)}>
          <Typography variant="subtitle1">About me</Typography>
        </Button>
        <Button color="inherit" onClick={() => scrollToComponent(portfolioRef)}>
          <Typography variant="subtitle1">Portfolio</Typography>
        </Button>
        {/* <Button color="inherit" onClick={() => scrollToComponent(educationRef)}>
          <Typography variant="subtitle1">Educacion</Typography>
        </Button> */}
        <Button color="inherit" onClick={() => scrollToComponent(skillsRef)}>
          <Typography variant="subtitle1">Skills</Typography>
        </Button>
        <Button color="inherit" onClick={() => scrollToComponent(contactRef)}>
          <Typography variant="subtitle1">Contacto</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
