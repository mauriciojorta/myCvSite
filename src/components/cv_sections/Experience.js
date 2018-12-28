import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Experience extends Component {
  state = {
    showExperienceInfo: false
  };

  showExperienceInfoFunc = () => {
    this.setState({
      showExperienceInfo: !this.state.showExperienceInfo
    });
  };

  render() {
    const {
      title,
      company,
      companyLogo,
      location,
      from,
      to,
      description
    } = this.props.experience;
    const { showExperienceInfo } = this.state;

    const thereIsDescription = description != null && description.length > 1;

    return (
      <div className="card card-body mb-3 cardShadow">
        <div className="row">
          <div className="col-md-3">
            <img
              src={companyLogo}
              alt="Company logo"
              className="img-thumbnail experienceLogo"
              style={{ cursor: 'pointer' }}
              onClick={this.showExperienceInfoFunc}
            />
          </div>
          <div className="col-md-9">
            <h4>
              {from} to {to} - {title} at {company}{' '}
              <i
                onClick={this.showExperienceInfoFunc}
                className="fas fa-sort-down"
                style={{ cursor: 'pointer' }}
              />
            </h4>
            {showExperienceInfo ? (
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

Experience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default connect()(Experience);
