import React, { Component } from 'react';
import Project from './Project';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from '../../actions/cvActions';

class Projects extends Component {
  componentDidMount() {
    console.log('Component did mount');
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props;
    return (
      <React.Fragment>
        <div id="projectSection">
          <h1 className="display-4 mb-2">Projects</h1>
          {projects.reverse().map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  projects: state.project.projects
});

export default connect(
  mapStateToProps,
  { getProjects }
)(Projects);
