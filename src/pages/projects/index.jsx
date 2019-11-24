import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import * as queryString from 'query-string';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../components/Header/HeaderContainer';
import Layout from '../../components/Layout';
import Projects from '../../components/Projects';
import { FilterProvider } from '../../context/FilterContext';
import Footer from '../../components/Footer';

const styles = {
  content: {
    flex: '1 0 auto',
    display: 'flex',
    'flex-direction': 'column'
  },
  projects: {
    flex: '1 1 auto'
  }
};

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.location = props.location;
    const { location, data } = props;
    const queryParams = queryString.parse(location.search);
    const { kwd: keyword } = queryParams;
    this.state = {
      keyword,
      projects: typeof keyword !== 'undefined' ? [] : data.allMongodbProjectsProjects.edges
    };
  }

  componentDidMount() {
    const canHover = !matchMedia('(hover: none)').matches;
    if (canHover) {
      document.body.classList.add('can-hover');
    }
    const { data } = this.props;
    const { keyword } = this.state;
    if (keyword) {
      const keywords = data.allMongodbProjectsKeywords.edges;
      const isKeywordExists = keywords.some(elem => elem.node.Keyword === keyword);
      if (isKeywordExists) {
        this.setState({
          projects: data.allMongodbProjectsProjects.edges.filter(elem =>
            elem.node.Keywords.some(item => item.Keyword === keyword)
          )
        });
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { location, data } = this.props;

    if (prevProps.location.search !== location.search) {
      window.scroll(0, this.getHeaderHeight());
      const queryParams = queryString.parse(location.search);
      const { kwd: keyword } = queryParams;
      let projects = [];
      const keywords = data.allMongodbProjectsKeywords.edges;
      const isKeywordExists = keywords.some(elem => elem.node.Keyword === keyword);
      // console.log(keyword);
      if (typeof keyword === 'undefined') {
        projects = data.allMongodbProjectsProjects.edges;
      } else if (isKeywordExists) {
        projects = data.allMongodbProjectsProjects.edges.filter(elem =>
          elem.node.Keywords.some(item => item.Keyword === keyword)
        );
      }
      this.setState({
        keyword,
        projects
      });
    }
  }

  getHeaderHeight = () => {
    if (this.headerRef) {
      const { height } = this.headerRef.current.getBoundingClientRect();
      return height;
    }
    return 70;
  };

  render() {
    const { classes } = this.props;
    const { projects, keyword } = this.state;
    return (
      <Layout>
        <FilterProvider filter={keyword}>
          <Header headerRef={this.headerRef} />
          <main className={classes.content}>
            <div className={classes.projects}>
              {!!projects.length && <Projects projects={projects} />}
            </div>
          </main>
          <Footer />
        </FilterProvider>
      </Layout>
    );
  }
}

export default withStyles(styles)(ProjectsPage);

export const projectsQuery = graphql`
  query Projects {
    allMongodbProjectsProjects {
      edges {
        node {
          Keywords {
            Keyword
          }
          Title
          Description
          Github
          Image {
            sizes {
              srcSet
              src
              sizes
              originalImg
              originalName
            }
            fluid(maxWidth: 750, srcSetBreakpoints: [350, 450, 550, 650, 750]) {
              ...GatsbyImageSharpFluid
            }
          }
          Tools
          Url
          ProjectId
        }
      }
    }
    allMongodbProjectsKeywords {
      edges {
        node {
          Keyword
        }
      }
    }
  }
`;

ProjectsPage.propTypes = {
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  data: PropTypes.shape({
    allMongodbProjectsProjects: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})).isRequired
    }).isRequired,
    allMongodbProjectsKeywords: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})).isRequired
    }).isRequired
  }).isRequired,
  classes: PropTypes.shape({ content: PropTypes.string, projects: PropTypes.string })
};

ProjectsPage.defaultProps = {
  classes: { content: '', projects: '' }
};
