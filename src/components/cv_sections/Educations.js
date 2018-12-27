import React, { Component } from 'react';
import Education from './Education';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEducations } from '../../actions/cvActions';

class Educations extends Component {
  componentDidMount() {
    console.log('Component did mount');
    this.props.getEducations();
  }

  render() {
    const { educations } = this.props;
    return (
      <React.Fragment>
        <div id="educationSection">
          <h2 className="display-4 mb-2">Education</h2>
          {educations.map(education => (
            <Education key={education.id} education={education} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

Educations.propTypes = {
  educations: PropTypes.array.isRequired,
  getEducations: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  educations: state.education.educations
});

export default connect(
  mapStateToProps,
  { getEducations }
)(Educations);
