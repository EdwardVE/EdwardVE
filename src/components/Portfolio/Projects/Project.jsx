import { Card, CardContent, Typography, IconButton, Grid } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Project = ({ projectInfo }) => {
  const { title, description, technologies, repository, demo } = projectInfo;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card style={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography>{description}</Typography>
            <Typography variant="subtitle2">Tecnologías utilizadas: {technologies.join(', ')}</Typography>
            {repository && (
              <IconButton href={repository} target="_blank" rel="noreferrer" color="primary">
                <GitHubIcon />
              </IconButton>
            )}
            {demo && (
              <IconButton href={demo} target="_blank" rel="noreferrer" color="primary">
                <PlayArrowIcon />
              </IconButton>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Project;
