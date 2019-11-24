import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    position: 'relative',
    color: 'lightgray',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '1.2rem',
    textShadow: '0 0 2px #fff',
    maxWidth: '75%',
    lineHeight: 1
  }
};

const useStyles = makeStyles(styles);

function ThumbnailOverlayTitle({ className, style, children }) {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${className}`} style={{ ...style }}>
      {children}
    </div>
  );
}
export default ThumbnailOverlayTitle;

ThumbnailOverlayTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({})
};

ThumbnailOverlayTitle.defaultProps = {
  className: '',
  style: {}
};
