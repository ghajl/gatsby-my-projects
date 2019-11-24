import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Thumbnail, {
  ThumbnailImage,
  ThumbnailRibbon,
  ThumbnailOverlay,
  ThumbnailOverlayTitle,
  ThumbnailOverlayTools
} from '../Thumbnail';
import styles from './ProjectsStyles';

const renderThumbnail = (project, classes) => {
  return (
    <Thumbnail>
      <ThumbnailImage alt={project.Title} projectImage={project.Image} />
      <ThumbnailOverlay>
        <ThumbnailOverlayTitle className={classes.overlayTitle}>
          {project.Title}
        </ThumbnailOverlayTitle>
        <ThumbnailOverlayTools className={classes.overlayTools}>
          {project.Tools.split(',')
            .map(t => t.trim())
            .reduce((acc, val) => `${acc}, ${val}`)}
        </ThumbnailOverlayTools>
      </ThumbnailOverlay>
      <ThumbnailRibbon href={project.Github}>GitHub</ThumbnailRibbon>
      <Button size="small" variant="contained" href={project.Url} className={classes.button}>
        View Project
      </Button>
    </Thumbnail>
  );
};

const renderProject = classes => item => {
  const project = item.node;
  return (
    <div className={classes.item} key={project.ProjectId}>
      {renderThumbnail(project, classes)}
    </div>
  );
};

const useStyles = makeStyles(styles);

function Projects({ projects }) {
  const classes = useStyles();
  return (
    <div className={`${classes.wrapper} page-center`}>{projects.map(renderProject(classes))}</div>
  );
}

export default Projects;

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({}))
};

Projects.defaultProps = {
  projects: []
};
