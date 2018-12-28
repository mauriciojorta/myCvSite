import React from 'react';

import Introduction from './Introduction';
import BasicData from './BasicData';
import Experiences from './Experiences';
import Educations from './Educations';
import Certifications from './Certifications';
import Projects from './Projects';

export default function Home() {
  return (
    <React.Fragment>
      <section>
        <Introduction />
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

      <section>
        <Projects />
      </section>
    </React.Fragment>
  );
}
