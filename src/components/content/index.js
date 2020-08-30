import React from 'react';

import pic from './../../media/1.jpeg';
import './content.scss';

const Content = props => {
  return (
    <div className='C'>
      {card}
      {proj}
      {talks}
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
        <span className='h2'>Tushar Pandey</span>
        <code>Web Developer</code>
      </div>
      <p>
        I am a CSE undergrad at BMSIT&M, Bangalore, batch of 2022. <br />I live in Bangalore, India.{' '}
        <br />
        {/* <br /> */}I like to work with <code>JS</code> and it's various frameworks.{' '}
        <code>Python</code> is my 2nd language of choice. <br />
        {/* <br /> */}
        This website shows my contact details, past experience and education along with some of the
        projects that I have worked on.
      </p>
    </div>
  </div>
);

const link = (src, label) => {
  if (src)
    return (
      <a className={`link`} href={`${src}`} target={'_blank'} rel={'noopener noreferrer'}>
        <span>{`${label}`}</span>
      </a>
    );
  else return <span>{`${label}`}</span>;
};

const lists = data => {
  return (
    <div className='article-C'>
      {data.map((list, i0) => {
        if (list.seperator) {
          return <div className='exp-sep'></div>;
        } else {
          return (
            <article>
              <header>
                <div className='articletitle'>{list.title}</div>
              </header>
              <section>
                <ul>
                  {list.items.map((item, i1) => {
                    return (
                      <li>
                        <header>
                          <h5>{link(item.title.url, item.title.content)}</h5>
                          {item.role && <role>{item.role}</role>}
                          {item.time && <time>{item.time}</time>}
                          {item.tags && (
                            <tags>
                              {item.tags.map((tag, i2) => (
                                <tag>{tag}</tag>
                              ))}
                            </tags>
                          )}
                        </header>
                        <section>
                          {item.content}
                          {item.items && (
                            <ul>
                              {item.items.map((item1, i2) => {
                                return <li>{item1}</li>;
                              })}
                            </ul>
                          )}
                        </section>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </article>
          );
        }
      })}
    </div>
  );
};

const proj = lists([
  {
    title: 'Projects',
    items: [
      {
        title: {
          content: 'express-mongosoe-boilerplate',
          url: 'https://github.com/tusharpandey13/express-mongoose-boilerplate',
        },
        tags: ['NodeJS', 'ExpressJS', 'MongoDB', 'Redis', 'Boilerplate', 'ES6'],
        content: 'A clean, opinionated NodeJS server boilerplate that uses ExpressJS, MongoDB and Redis',
      },
      {
        title: {
          content: 'totoro-node',
          url: 'https://github.com/VGJohn/totoro',
        },
        tags: ['npm', 'package', 'NodeJS', 'ExpressJS'],
        content: 'Node.js API Versioning Helper Module',
      },
      {
        title: {
          content: 'portfolio-site',
          url: 'https://github.com/tusharpandey13/portfolio-site',
        },
        tags: ['ReactJS', 'NodeJS', 'SCSS', 'Create-React-App', 'gh-pages'],
        content: 'My portfolio website source created in React and SCSS',
      },
      {
        title: {
          content: 'Dijkstra on London Tube',
          url: 'https://github.com/tusharpandey13/dijkstra_london_tube',
        },
        tags: ['Python', 'Flask', 'P5.JS', 'Dijkstra', 'Graph'],
        content: `An interactive visualisation for using the dijkstra's algorithm to find the shortest path between stations in the london underground`,
      },
      {
        title: {
          content: 'Webrtc OpenCV.JS Demo',
          url: 'https://github.com/tusharpandey13/webrtc_opencvjs_demo',
        },
        tags: ['Python', 'Flask', 'OpenCV', 'JS'],
        content: 'Using opencv.js with webrtc to detect faces',
      },
      {
        title: {
          content: 'Interesting Wikis Bot',
          url: 'https://github.com/tusharpandey13/interestingwikisbot',
        },
        tags: ['Python', 'Bot', 'Twitter', 'Wikipedia', 'Reddit'],
        content:
          'A twitter bot made in python that tweets the top post(sorted by hot) on /r/wikipedia every 30 mins',
      },
    ],
  },
]);

const exp = lists([
  {
    title: 'Experience',
    items: [
      {
        title: {
          content: 'DAPHNIS LABS',
        },
        role: 'Full Stack Intern',
        time: '07/2020 – 08/2020',
        items: [
          'Created and deployed production-ready RESTful apis and admin panels.',
          'Worked with deployment on AWS, Digital Ocean and Heroku services.',
          'Worked on the MERN stack and PostgreSQL.',
        ],
      },
      {
        title: {
          content: 'IBM GLOBAL REMOTE MENTORING PROGRAM',
        },
        role: 'Research Intern',
        time: '04/2020 – 07/2020',
        content:
          'Was responsible for the development of the project Data Readiness Toolkit used for analysing and transforming data for Machine Learning pipelines.',
      },
      {
        title: {
          content: 'URBANSTOP STUDIO LLP',
        },
        role: 'Backend Intern',
        time: '11/2019 – 12/2019',
        content:
          'Was responsible for the successful development, testing and deployment of various RESTful API services across the client system. Learned essential skills like being a team- player and time management.',
      },
    ],
  },
  { seperator: true },
  {
    title: 'Education',
    items: [
      {
        title: {
          content: 'BMSIT&M, BANGALORE',
        },
        role: 'CSE Undergrad',
        time: '2022',
      },
      {
        title: {
          content: 'DPS, DHANBAD',
        },
        role: 'High School',
        time: '2022',
      },
    ],
  },
]);

const talks = lists([
  {
    title: 'Talks and seminars',
    items: [
      {
        title: {
          content: 'Web APIs and JSON',
          url: 'https://www.youtube.com/watch?v=AV-491rIPxg',
        },
        role: 'Youtube',
        time: 'Jun 23, 2020',
      },
    ],
  },
]);

export default Content;
