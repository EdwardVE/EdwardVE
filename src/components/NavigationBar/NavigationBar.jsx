import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavigationBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Button color="inherit">
          <Typography variant="subtitle1">Edward VE</Typography>
        </Button>
        <Button color="inherit">
          <Typography variant="subtitle1">About me</Typography>
        </Button>
        <Button color="inherit">
          <Typography variant="subtitle1">Portfolio</Typography>
        </Button>
        <Button color="inherit">
          <Typography variant="subtitle1">Educacion</Typography>
        </Button>
        <Button color="inherit">
          <Typography variant="subtitle1">Skills</Typography>
        </Button>
        <Button color="inherit">
          <Typography variant="subtitle1">Contacto</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
