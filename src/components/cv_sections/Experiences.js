import React, { Component } from 'react';
import Experience from './Experience';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getExperiences } from '../../actions/cvActions';

class Experiences extends Component {
  componentDidMount() {
    console.log('Component did mount');
    this.props.getExperiences();
  }

  render() {
    const { experiences } = this.props;
    return (
      <React.Fragment>
        <div id="experienceSection">
          <h1 className="display-4 mb-2">Experience</h1>
          {experiences.map(experience => (
            <Experience key={experience.id} experience={experience} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

Experiences.propTypes = {
  experiences: PropTypes.array.isRequired,
  getExperiences: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  experiences: state.experience.experiences
});

export default connect(
  mapStateToProps,
  { getExperiences }
)(Experiences);
