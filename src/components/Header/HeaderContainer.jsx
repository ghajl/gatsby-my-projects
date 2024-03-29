import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import throttle from 'lodash.throttle';
import Menu from '../Menu';
import Header from './Header';
import styles from './HeaderStyles';

class HeaderContainer extends Component {
  constructor() {
    super();
    this.menuRef = React.createRef();
    this.state = {
      isHeaderVisible: true
    };
  }

  componentDidMount() {
    window.addEventListener('resize', throttle(this.handleWindowSizeChange, 250));
    window.addEventListener('scroll', throttle(this.handleScroll, 100));
    this.setState({
      height: this.getHeaderHeight()
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    window.removeEventListener('scroll', this.handleScroll);
  }

  getHeaderHeight = () => {
    const { headerRef } = this.props;
    if (headerRef) {
      const { height } = headerRef.current.getBoundingClientRect();
      return height;
    }
    return 70;
  };

  handleWindowSizeChange = () => {
    this.setState({
      height: this.getHeaderHeight()
    });
  };

  handleScroll = () => {
    const { isHeaderVisible, height } = this.state;
    const { headerRef } = this.props;
    if (headerRef) {
      const { top } = headerRef.current.getBoundingClientRect();
      if (!isHeaderVisible) {
        if (top > -1 * height) {
          this.setState({ isHeaderVisible: true });
        }
      } else if (top <= -1 * height) {
        this.setState({ isHeaderVisible: false });
      }
    }
  };

  render() {
    const { classes, headerRef } = this.props;
    const { isHeaderVisible } = this.state;
    const stickyBackgroundColor = '#323438';
    const stickyBoxShadow =
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)';
    const headerStyle = !isHeaderVisible
      ? {
          background: stickyBackgroundColor,
          boxShadow: stickyBoxShadow
        }
      : {};
    const menuStyle = !isHeaderVisible
      ? {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: stickyBackgroundColor,
          boxShadow: stickyBoxShadow
        }
      : {};
    const menuAnchorStyle =
      !isHeaderVisible && this.menuRef
        ? {
            height: this.menuRef.current.getBoundingClientRect().height
          }
        : {
            height: 0
          };
    return (
      <div className={classes.wrapper} style={headerStyle}>
        <Header headerRef={headerRef} />
        <div className={classes.menuAnchor} style={menuAnchorStyle} />
        <Menu menuRef={this.menuRef} style={menuStyle} />
      </div>
    );
  }
}

export default withStyles(styles)(HeaderContainer);

HeaderContainer.propTypes = {
  classes: PropTypes.shape({ wrapper: PropTypes.string, menuAnchor: PropTypes.string }),
  headerRef: PropTypes.shape({
    current: PropTypes.shape({ getBoundingClientRect: PropTypes.func.isRequired }).isRequired
  }).isRequired
};

HeaderContainer.defaultProps = {
  classes: { wrapper: '', menuAnchor: '' }
};
