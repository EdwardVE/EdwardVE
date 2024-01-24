import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          <Typography variant="subtitle1">Edward VE</Typography>
        </Button>
        <Button color="inherit" component={Link} to="/about">
          <Typography variant="subtitle1">About me</Typography>
        </Button>
        <Button color="inherit" component={Link} to="/portfolio">
          <Typography variant="subtitle1">Portfolio</Typography>
        </Button>
        <Button color="inherit" component={Link} to="/education">
          <Typography variant="subtitle1">Educacion</Typography>
        </Button>
        <Button color="inherit" component={Link} to="/skills">
          <Typography variant="subtitle1">Skills</Typography>
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          <Typography variant="subtitle1">Contacto</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};


export default NavigationBar;
