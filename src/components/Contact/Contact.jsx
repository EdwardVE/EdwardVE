
import {Typography, Link, IconButton, Container } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
export const handleDownloadCV = () => {

  const cvUrl = "https://drive.google.com/file/d/1JMk2yUfmLfj51dncn0Es2KW0UZZ0dGu2/view"; 

  window.open(cvUrl, '_blank'); //! Para abrir el pdf
  
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
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }} >
        <Typography variant="h4" align="center">Contacto</Typography>
        <Typography align="center">Si quieres ponerte en contacto conmigo, escríbeme: <Link href="mailto:edwardvasallo@gmail.com">edwardvasallo@gmail.com</Link></Typography>
        <Typography align="center">
          Descarga mi CV
          <IconButton onClick={handleDownloadCV} color="red" aria-label="Descargar CV">
            <DownloadIcon />
          </IconButton>
        </Typography>
      </Container>
  );
};

export default Contact;
