import React from 'react';

import BasicData from './BasicData';
import Experiences from './Experiences';
import Educations from './Educations';
import Certifications from './Certifications';

export default function Home() {
  return (
    <React.Fragment>
      <section>
        <h2 className="display-4 mb-2">Who am I?</h2>
        <p className="lead">
          Computer Software Engineer graduate from the University of La Laguna
          (Spain), with experience in the creation of software solutions with
          programming languages such as C++, Java and those of web development
          like HTML, CSS and JavaScript. I also possess knowledge about Software
          Engineering and software design patterns.
        </p>
      </section>

      <section>
        <BasicData />
      </section>

      <section>
        <Experiences />
      </section>

      <section>
        <Educations />
      </section>

      <section>
        <Certifications />
      </section>
    </React.Fragment>
  );
}
