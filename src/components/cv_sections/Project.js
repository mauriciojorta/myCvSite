import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Project extends Component {
  state = {
    showProjectInfo: false
  };

  showProjectInfoFunc = () => {
    this.setState({
      showProjectInfo: !this.state.showProjectInfo
    });
  };

  render() {
    const { name, from, to, description, appUrl, url } = this.props.project;
    const { showProjectInfo } = this.state;

    const thereIsAppUrl = appUrl != null && appUrl.length > 1;

    return (
      <div className="card card-body mb-3 cardShadow">
        <div className="row">
          <div className="col-md-12">
            <h4>
              {from} to {to} - {name}{' '}
              <i
                onClick={this.showProjectInfoFunc}
                className="fas fa-sort-down"
                style={{ cursor: 'pointer' }}
              />
            </h4>
            {showProjectInfo ? (
              <ul className="list-group">
                <li className="list-group-item">
                  <b>Description:</b> {description}
                </li>
                {thereIsAppUrl ? (
                  <li className="list-group-item">
                    <b>App Link:</b>{' '}
                    <a href={appUrl} target="_blank" rel="noopener noreferrer">
                      Try App
                    </a>
                  </li>
                ) : null}
                <li className="list-group-item">
                  <b>Project Link:</b>{' '}
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    See Project
                  </a>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  project: PropTypes.object.isRequired
};

export default connect()(Project);
