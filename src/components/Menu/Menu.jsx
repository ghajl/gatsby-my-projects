import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import FilterButton from '../FilterButton';
import styles from './MenuStyles';

const useStyles = makeStyles(styles);

function Menu({ menuRef, style }) {
  const classes = useStyles();
  return (
    <nav ref={menuRef} style={{ ...style }} className={classes.menu}>
      <div className={`${classes.links} page-center`}>
        <div className={classes.wrapper}>
          <FilterButton value="show-all">Show All</FilterButton>
          <FilterButton value="full-stack">Full Stack</FilterButton>
          <FilterButton value="front-end">Front-End</FilterButton>
          <FilterButton value="nodejs">NodeJS</FilterButton>
          <FilterButton value="redux">Redux</FilterButton>
          <FilterButton value="gatsby">Gatsby</FilterButton>
          <FilterButton value="graphql">GraphQL</FilterButton>
          <FilterButton value="mongodb">MongoDb</FilterButton>
          <FilterButton value="react">React</FilterButton>
          <FilterButton value="netlify-cms">Netlify CMS</FilterButton>
        </div>
      </div>
    </nav>
  );
}

export default Menu;

Menu.propTypes = {
  style: PropTypes.shape({}),
  menuRef: PropTypes.shape({}).isRequired
};

Menu.defaultProps = {
  style: {}
};
