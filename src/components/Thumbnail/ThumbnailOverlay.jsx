import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    transition: '.5s ease',
    opacity: 0,
    position: 'absolute',
    background: 'rgba(0,0,0,0)',
    color: 'white',
    top: 0,
    left: 0,
    padding: '1.5rem',
    width: '100%',
    height: '100%',
    zIndex: -2,
    '.hover &': {
      background: 'rgba(0,0,0,0.6)',
      opacity: 1
    }
  }
};

const useStyles = makeStyles(styles);

function ThumbnailOverlay({ children }) {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
}

export default ThumbnailOverlay;

ThumbnailOverlay.propTypes = {
  children: PropTypes.node.isRequired
};
