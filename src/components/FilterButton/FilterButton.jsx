import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import styles from './FilterButtonStyles';
import FilterContext from '../../context/FilterContext';

function FilterButton({ classes, children, value }) {
  const [active, setActive] = React.useState(false);

  const filter = useContext(FilterContext);

  useEffect(() => {
    if ((filter && value === filter) || (!filter && value === 'show-all')) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [filter]);

  const to = value === 'show-all' ? '/projects' : `/projects?kwd=${value}`;
  return (
    <Link className={active ? `${classes.active} ${classes.button}` : `${classes.button}`} to={to}>
      {children}
    </Link>
  );
}

export default withStyles(styles)(FilterButton);

FilterButton.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({ active: PropTypes.string, button: PropTypes.string }).isRequired
};

FilterButton.defaultProps = {
  value: ''
};
