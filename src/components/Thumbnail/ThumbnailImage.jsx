import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image/withIEPolyfill';

const styles = {
  wrapper: {
    position: 'relative',
    background: '#333',
    minHeight: 'calc((100vw - 2.4rem) / 1.57)',
    '@media (min-width: 500px)': {
      minHeight: 'calc((500px - 2.4rem) / 1.57)'
    },
    '@media (min-width: 768px)': {
      minHeight: 'calc((350px - 2.4rem) / 1.57)'
    },
    '@media (min-width: 1024px)': {
      minHeight: 'calc((450px - 2.4rem) / 1.57)'
    },
    '@media (min-width: 1280px)': {
      minHeight: 'calc((550px - 2.4rem) / 1.57)'
    },
    '@media (min-width: 1440px)': {
      minHeight: 'calc((650px - 2.4rem) / 1.57)'
    },
    '@media (min-width: 1600px)': {
      minHeight: 'calc((750px - 2.4rem) / 1.57)'
    },
    zIndex: -3
  },
  image: {
    position: 'relative',
    objectFit: 'cover',
    display: 'block',
    maxWidth: '100%'
  },
  progressWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  loading: {
    position: 'relative'
  },
  colorPrimary: {
    color: 'greenyellow'
  }
};

const useStyles = makeStyles(styles);

function ThumbnailImage({ alt, projectImage }) {
  const classes = useStyles();
  const sizes =
    '(max-width: 767px) 100vw, (max-width: 1023px) 350px, (max-width: 1279px) 450px, (max-width: 1439px) 550px, (max-width: 1599px) 650px, 750px';
  const fluidImage = { ...projectImage.fluid, ...{ sizes } };
  return (
    <div className={classes.wrapper}>
      <Img className={classes.image} alt={alt} fluid={fluidImage} />
    </div>
  );
}

export default ThumbnailImage;

ThumbnailImage.propTypes = {
  projectImage: PropTypes.shape({ fluid: PropTypes.shape.isRequired }).isRequired,
  alt: PropTypes.string
};

ThumbnailImage.defaultProps = {
  alt: "Project's screenshot"
};
