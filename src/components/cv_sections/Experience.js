import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Experience extends Component {
  state = {
    showExperienceInfo: false
  };

  render() {
    const {
      id,
      title,
      company,
      location,
      from,
      to,
      description
    } = this.props.experience;
    const { showExperienceInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {title} at {company}
          <i
            onClick={() =>
              this.setState({
                showExperienceInfo: !this.state.showExperienceInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: 'pointer' }}
          />
        </h4>
        {showExperienceInfo ? (
          <ul className="list-group">
            <li className="list-group-item">From: {from}</li>
            <li className="list-group-item">To: {to}</li>
            <li className="list-group-item">Location: {location}</li>
            <li className="list-group-item">Description: {description}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Experience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default connect()(Experience);
