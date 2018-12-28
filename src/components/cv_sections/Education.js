import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Education extends Component {
  state = {
    showEducationInfo: false
  };

  showEducationInfoFunc = () => {
    this.setState({
      showEducationInfo: !this.state.showEducationInfo
    });
  };

  render() {
    const {
      title,
      institution,
      institutionLogo,
      location,
      from,
      to,
      description
    } = this.props.education;
    const { showEducationInfo } = this.state;

    const thereIsDescription = description != null && description.length > 1;

    return (
      <div className="card card-body mb-3 cardShadow">
        <div className="row">
          <div className="col-md-3">
            <img
              src={institutionLogo}
              alt="Institution logo"
              className="img-thumbnail educationLogo"
              style={{ cursor: 'pointer' }}
              onClick={this.showEducationInfoFunc}
            />
          </div>
          <div className="col-md-9">
            <h4>
              {from} to {to} - {title} at {institution}{' '}
              <i
                onClick={this.showEducationInfoFunc}
                className="fas fa-sort-down"
                style={{ cursor: 'pointer' }}
              />
            </h4>
            {showEducationInfo ? (
              <ul className="list-group">
                <li className="list-group-item">
                  <b>Location:</b> {location}
                </li>
                {thereIsDescription ? (
                  <li className="list-group-item">
                    <b>Description:</b> {description}
                  </li>
                ) : null}
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
