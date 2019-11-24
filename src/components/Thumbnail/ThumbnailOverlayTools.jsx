import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    position: 'relative',
    color: 'white',
    fontFamily: 'Open Sans, sans-serif',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontSize: '.6rem',
    maxWidth: '75%',
    lineHeight: 1,
    overflow: 'ellipse'
  }
};

const useStyles = makeStyles(styles);

function ThumbnailOverlayTools({ style, className, children }) {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${className}`} style={{ ...style }}>
      {children}
    </div>
  );
}

export default ThumbnailOverlayTools;

ThumbnailOverlayTools.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classes: PropTypes.shape({}),
  style: PropTypes.shape({})
};

ThumbnailOverlayTools.defaultProps = {
  className: '',
  classes: {},
  style: {}
};
