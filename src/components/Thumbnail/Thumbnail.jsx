import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  thumbnail: {
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 0 3px #222, inset 0 0 50px rgba(0,0,0,.5)'
  }
};

const useStyles = makeStyles(styles);

function Thumbnail({ children }) {
  const [hover, setHover] = useState(false);

  const handlePopoverOpen = () => {
    setHover(true);
  };

  const handlePopoverClose = () => {
    setHover(false);
  };

  const classes = useStyles();

  const thumbnailClasses = `${classes.thumbnail} ${hover ? ' hover' : ''}`;
  return (
    <div
      className={thumbnailClasses}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      {children}
    </div>
  );
}

export default Thumbnail;

Thumbnail.propTypes = {
  children: PropTypes.node.isRequired
};
