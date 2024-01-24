import React from 'react';
import { Container, Typography, Grid, Link, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Contacto
      </Typography>

        <Grid item xs={12} md={6}>
          <Typography variant="h6">Correo Electrónico:</Typography>
          <Link href="mailto:edwardvasallo@gmail.com">edwardvasallo@gmail.com</Link>
        </Grid>

      {/* Formulario de contacto */}
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Nombre" variant="outlined" margin="normal" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Correo Electrónico" variant="outlined" margin="normal" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Mensaje" multiline rows={4} variant="outlined" margin="normal" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Enviar Mensaje
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Contact;
