import React from 'react';

import pic from './../../media/1.png';
import './content.scss';

const Content = props => {
  return (
    <div className='C'>
      {card}
      {exp}
    </div>
  );
};

const card = (
  <div className='Card'>
    <div className='cimg'>
      <img src={pic} alt='' width='200' height='200' className={`img`} />
    </div>
    <div className='c-sep'></div>
    <div className='ct'>
      <div className='ctheader'>
        <span className='h2'>Tushar Pandey,</span>
        <code>Web Developer</code>
      </div>
      <p>
        I am a CSE undergrad at BMSIT&M, Bangalore, batch of 2022. <br />
        I live in Bangalore, India. <br />I like to work with <code>JS</code> and it's various
        frameworks. <code>Python</code> is my 2nd language of choice. <br />
        This website shows my contact details, past experience and education along with some of the
        projects that I have worked on.
      </p>
    </div>
  </div>
);

const exp = (
  <div className='exp-C'>
    <article>
      <header>
        <div className='exptitle'>Experience</div>
      </header>
      <section>
        <ul>
          <li>
            <header>
              <place>Daphnis Labs</place>
              <role>Full Stack Intern</role>
              <time>07/2020 – 08/2020</time>
            </header>
            <section>
              <ul>
                <li>Created and deployed production-ready RESTful apis and admin panels.</li>
                <li>Worked with deployment on AWS, Digital Ocean and Heroku services.</li>
                <li>Worked on the MERN stack and PostgreSQL.</li>
              </ul>
            </section>
          </li>
          <li>
            <header>
              <place>IBM Global Remote Mentoring Program</place>
              <role>Research Intern</role>
              <time>04/2020 – 07/2020</time>
            </header>
            <section>
              Was responsible for the development of the project Data Readiness Toolkit used for
              analysing and transforming data for Machine Learning pipelines.
            </section>
          </li>
          <li>
            <header>
              <place>Urbanstop Studio LLP</place>
              <role>Backend Intern</role>
              <time>11/2019 – 12/2019</time>
            </header>
            <section>
              Was responsible for the successful development, testing and deployment of various RESTful
              API services across the client system. Learned essential skills like being a team- player
              and time management.
            </section>
          </li>
        </ul>
      </section>
    </article>
    <div className='exp-sep'></div>
    <article>
      <header>
        <div className='exptitle'>Education</div>
      </header>
      <section>
        <ul>
          <li>
            <header>
              <place>BMSIT&M, Bangalore</place>
              <role>Student</role>
              <time>2022</time>
            </header>
            <section>CSE Undergraduate</section>
          </li>
          <li>
            <header>
              <place>DPS Dhanbad</place>
              <role>Student</role>
              <time>2018</time>
            </header>
            <section>High School</section>
          </li>
        </ul>
      </section>
    </article>
  </div>
);

export default Content;
