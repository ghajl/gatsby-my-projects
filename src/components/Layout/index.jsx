import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';

const styles = {
  '@global': {
    html: {
      minHeight: '100%',
      height: '100%',
      fontSize: 16
    },
    body: {
      height: '100%',
      minHeight: '100%',
      margin: 0,
      background: '#55585E',
      padding: 0,
      '& > div:first-child': {
        height: '100%'
      }
    },
    '*, *:before, *:after': {
      boxSizing: 'border-box'
    },
    a: {
      textDecoration: 'none !important',
      outline: 'none'
    },
    '.page-center': {
      margin: '0 auto',
      maxWidth: 500,
      minWidth: 290,
      '@media (min-width: 768px)': {
        maxWidth: 700
      },
      '@media (min-width: 1024px)': {
        maxWidth: 900
      },
      '@media (min-width: 1280px)': {
        maxWidth: 1100
      },
      '@media (min-width: 1440px)': {
        maxWidth: 1300
      },
      '@media (min-width: 1600px)': {
        maxWidth: 1500
      }
    }
  },
  root: {
    position: 'relative',
    display: 'flex',
    'flex-direction': 'column',
    height: '100%'
  }
};

const htmlAttributes = {
  lang: 'en'
};

const meta = [
  {
    charset: 'utf-8'
  },
  {
    'http-equiv': 'X-UA-Compatible',
    content: 'IE=edge'
  },
  {
    name: 'viewport',
    content: 'initial-scale=1, minimum-scale=1, width=device-width, height=device-height'
  },
  {
    name: 'description',
    content: 'Michael Umansky. Web Developer.'
  },
  {
    name: 'keywords',
    content: 'michael umansky, web, websites, website, freelance, developer'
  }
];

const links = [
  { rel: 'apple-touch-icon', sizes: '180x180', href: `${withPrefix('/')}img/apple-touch-icon.png` },
  {
    rel: 'icon',
    type: 'image/png',
    href: `${withPrefix('/')}img/favicon-32x32.png`,
    sizes: '32x32'
  },
  {
    rel: 'icon',
    type: 'image/png',
    href: `${withPrefix('/')}img/favicon-16x16.png`,
    sizes: '16x16'
  }
];

const title = 'Michael Umansky Projects';

const useStyles = makeStyles(styles);

function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Helmet htmlAttributes={htmlAttributes} title={title} link={links} meta={meta} />
      {children}
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))])
    .isRequired
};
