import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from './HeaderStyles';

const useStyles = makeStyles(styles);

function Header({ headerRef }) {
  const classes = useStyles();
  return (
    <header className={`${classes.header} page-center`} ref={headerRef}>
      <div className={classes.title}>
        <h1>My projects</h1>
      </div>
      <div className={classes.intro}>
        <h4>
          Hi! Here are some of the projects that I wrote when I first started to learn about web
          development.
        </h4>
      </div>
    </header>
  );
}

export default Header;

Header.propTypes = {
  headerRef: PropTypes.shape({}).isRequired
};
