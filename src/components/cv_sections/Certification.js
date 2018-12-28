import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Certification extends Component {
  state = {
    showCertificationInfo: false
  };

  showCertificationInfoFunc = () => {
    this.setState({
      showCertificationInfo: !this.state.showCertificationInfo
    });
  };

  render() {
    const {
      id,
      name,
      organization,
      organizationLogo,
      issueDate,
      expirationDate,
      credentialId,
      credentialUrl
    } = this.props.certification;

    const thereIsExpirationDate =
      expirationDate != null && expirationDate.length > 1;

    const thereIsCredentialId = credentialId != null && credentialId.length > 1;

    const thereIsCredentialUrl =
      credentialUrl != null && credentialUrl.length > 1;

    const { showCertificationInfo } = this.state;

    return (
      <div className="card card-body mb-3 cardShadow">
        <div className="row">
          <div className="col-md-3">
            <img
              src={organizationLogo}
              alt="Organization logo"
              className="img-thumbnail certificationLogo"
              onClick={this.showCertificationInfoFunc}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="col-md-9">
            <h4>
              {name}{' '}
              <i
                onClick={this.showCertificationInfoFunc}
                className="fas fa-sort-down"
                style={{ cursor: 'pointer' }}
              />
            </h4>
            {showCertificationInfo ? (
              <ul className="list-group">
                <li className="list-group-item">
                  <b>Organization:</b> {organization}
                </li>
                <li className="list-group-item">
                  <b>Issue Date:</b> {issueDate}
                </li>
                {thereIsExpirationDate ? (
                  <li className="list-group-item">
                    <b>Expiration Date:</b> {expirationDate}
                  </li>
                ) : null}
                {thereIsCredentialId ? (
                  <li className="list-group-item">
                    <b>Credential ID:</b> {credentialId}
                  </li>
                ) : null}
                {thereIsCredentialUrl ? (
                  <li className="list-group-item">
                    <b>Credential Url:</b>{' '}
                    <a
                      href={credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {' '}
                      See credential{' '}
                    </a>
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

Certification.propTypes = {
  certification: PropTypes.object.isRequired
};

export default connect()(Certification);
