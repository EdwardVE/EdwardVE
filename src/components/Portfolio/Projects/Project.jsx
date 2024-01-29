import React from 'react';
import { Card, CardContent, Typography, IconButton, Grid, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Project = ({ projectInfo }) => {
  const { title, description, technologies, repository, demo, image } = projectInfo;

  return (
    <Card style={{ height: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          {demo ? (
            <Link href={demo} target="_blank" rel="noreferrer">
              <img
                src={image}
                alt={`${title}`}
                style={{ maxWidth: "100%", height: "auto", borderRadius: "2%", cursor: "pointer" }}
              />
            </Link>
          ) : (
            <img src={image} alt={`${title}`} style={{ maxWidth: "100%", height: "auto", borderRadius: "2%" }} />
          )}
        </CardContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardContent>
            <Typography>{description}</Typography>
            <Typography variant="h5">Tecnologías utilizadas: {technologies.join(', ')}</Typography>
            
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
        </Grid>
      </Grid>
    </Card>
  );
};

export default Project;
