import React from 'react';
import {Typography, Link, Paper, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
export const handleDownloadCV = () => {
  // URL de tu CV
  const cvUrl = "https://drive.google.com/file/d/1JMk2yUfmLfj51dncn0Es2KW0UZZ0dGu2/view"; 

  // window.open(cvUrl, '_blank'); //! Para abrir el pdf
  
  fetch(cvUrl)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'Edward Vasallo CV.pdf'; // Reemplaza con el nombre deseado para el archivo
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(url);
    });
}
const Contact = () => {

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: 'auto', margin: 'auto' }}>
    <Typography variant="subtitle1">EDWARD VASALLO</Typography>
    <Typography variant="subtitle1">Full Stack Web Developer</Typography>

    <Typography variant="h4">Contacto </Typography>
    <Typography>Si quieres ponerte en contacto conmigo escríbeme: <Link href="mailto:edwardvasallo@gmail.com">edwardvasallo@gmail.com</Link></Typography>
    <Typography>Dercarga mi CV
      <IconButton onClick={handleDownloadCV} color="primary" aria-label="Descargar CV">
        <DownloadIcon />
      </IconButton>
    </Typography>
    
  </Paper>
  );
};

export default Contact;
