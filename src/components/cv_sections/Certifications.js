import React, { Component } from 'react';
import Certification from './Certification';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCertifications } from '../../actions/cvActions';

class Certifications extends Component {
  componentDidMount() {
    console.log('Component did mount');
    this.props.getCertifications();
  }

  render() {
    const { certifications } = this.props;
    return (
      <React.Fragment>
        <div id="certificationSection">
          <h2 className="display-4 mb-2">Certification</h2>
          {certifications.map(certification => (
            <Certification
              key={certification.id}
              certification={certification}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

Certifications.propTypes = {
  certifications: PropTypes.array.isRequired,
  getCertifications: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  certifications: state.certification.certifications
});

export default connect(
  mapStateToProps,
  { getCertifications }
)(Certifications);
