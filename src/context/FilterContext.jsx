import React from 'react';
import PropTypes from 'prop-types';

const FilterContext = React.createContext();

const FilterProvider = ({ filter, children }) => (
  <FilterContext.Provider value={filter}>{children}</FilterContext.Provider>
);

export default FilterContext;

export { FilterProvider };

FilterProvider.propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.string
};

FilterProvider.defaultProps = {
  filter: ''
};
