import React from 'react';
import cvPhoto from './fotoCV.png';

export default function BasicData() {
  return (
    <div id="basicInfo">
      <h1 className="display-4 mb-3">Basic info</h1>
      <ul className="lead">
        <img
          src={cvPhoto}
          alt="My CV picture"
          className="img-thumbnail"
          id="cvPhoto"
        />
        <li>
          <b>Name: </b> Mauricio José
        </li>
        <li>
          <b>Last Names: </b> Orta Rodríguez
        </li>
        <li>
          <b>Birth Date: </b> 07/01/1994
        </li>
        <li>
          <b>Address: </b> Madrid, Spain
        </li>
        <li>
          <b>Email: </b>{' '}
          <a
            href="mailto:mauriciojorta94@gmail.com?subject = Feedback&body = Message"
            target="_blank"
            rel="noopener noreferrer"
          >
            mauriciojorta94@gmail.com
          </a>
        </li>
        <li>
          <b>LinkedIn: </b>{' '}
          <a
            href="https://www.linkedin.com/in/mauricio-orta-b20a9889/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn Profile
          </a>
        </li>
        <li>
          <b>GitHub: </b>{' '}
          <a
            href="https://github.com/mauriciojorta"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub Profile
          </a>
        </li>
      </ul>
    </div>
  );
}
