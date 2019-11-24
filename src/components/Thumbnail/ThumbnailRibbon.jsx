import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  ribbon: {
    backgroundColor: '#4ca535',
    overflow: 'hidden',
    top: '2.2rem',
    right: '2.2rem',
    width: '200px',
    display: 'block',
    padding: '0.5rem',
    position: 'absolute',
    textAlign: 'center',
    userSelect: 'none',
    opacity: '.8',
    zIndex: -1,
    lineHeight: 1,
    font: 'bold 1.3rem sans-serif',
    color: '#fff',
    textDecoration: 'none',
    perspective: 100,
    transform: 'translate(50%, -50%) rotate(45deg) translate3d(0,0,0)',
    fontSmoothing: 'antialiased'
  },
  ribbonLink: {
    top: '2.2rem',
    right: '2.2rem',
    width: '200px',
    height: '2.3rem',
    transform: 'translate(50%, -50%) rotate(45deg) translate3d(0,0,0)',
    display: 'block',
    position: 'absolute',
    opacity: 0
  }
};

const useStyles = makeStyles(styles);

function ThumbnailRibbon({ style, className, href, target, rel, children }) {
  const classes = useStyles();
  return (
    <>
      <div className={`${classes.ribbon} ${className}`} style={{ ...style }}>
        {children}
      </div>
      <a className={classes.ribbonLink} href={href} target={target} rel={rel}>
        Link to gitHub page
      </a>
    </>
  );
}

export default ThumbnailRibbon;

ThumbnailRibbon.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classes: PropTypes.shape({}),
  style: PropTypes.shape({})
};

ThumbnailRibbon.defaultProps = {
  className: '',
  target: '_blank',
  rel: 'noopener noreferrer',
  classes: {},
  style: {}
};
