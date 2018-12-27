import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Education extends Component {
  state = {
    showEducationInfo: false
  };

  render() {
    const {
      id,
      title,
      institution,
      institutionLogo,
      location,
      from,
      to,
      description
    } = this.props.education;
    const { showEducationInfo } = this.state;

    return (
      <div className="card card-body mb-3 cardShadow">
        <div className="row">
          <div className="col-md-3">
            <img
              src={institutionLogo}
              alt="Institution logo"
              className="img-thumbnail educationLogo"
            />
          </div>
          <div className="col-md-9">
            <h4>
              {from} to {to} - {title} at {institution}{' '}
              <i
                onClick={() =>
                  this.setState({
                    showEducationInfo: !this.state.showEducationInfo
                  })
                }
                className="fas fa-sort-down"
                style={{ cursor: 'pointer' }}
              />
            </h4>
            {showEducationInfo ? (
              <ul className="list-group">
                <li className="list-group-item">
                  <b>Location:</b> {location}
                </li>
                <li className="list-group-item">
                  <b>Description:</b> {description}
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  education: PropTypes.object.isRequired
};

export default connect()(Education);
