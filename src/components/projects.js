import React from 'react';
import { Row, Col, Card, CardColumns } from 'react-bootstrap';

import nak2 from '../media/nak2.png';
import gh1 from '../media/gh1.png';

const Projects = props => {
  return (
    <div className='pl-4 mt-3 pr-4 mb-3'>
      <div className='h2 mb-3'>Projects</div>
      <Col className=''>
        <CardColumns>
          <Card>
            <Card.Img variant='top' src={nak2} />
            <Card.Body>
              <Card.Title className='mb-0'>Nakshatra</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>
                <Card.Text>
                  Developed and deployed APIs, backend and Admin Panel of the popular android app
                  'Nakshatra'
                </Card.Text>
              </small>
            </Card.Footer>
          </Card>

          <Card className='p-3'>
            <blockquote className='blockquote mb-0 card-body'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <footer className='blockquote-footer'>
                <small className='text-muted'>
                  Someone famous in <cite title='Source Title'>Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card>
            <Card.Img variant='top' src={gh1} />
            <Card.Body>
              <Card.Title className='mb-0'>express-mongoose boilerplate</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>
                <Card.Text>
                  A minimal, opinionated NodeJS ExpressJS and Mongoose boilerplate that can be used
                  quickly.
                </Card.Text>
              </small>
            </Card.Footer>
          </Card>
          <Card bg='primary' text='white' className='text-center p-3'>
            <blockquote className='blockquote mb-0 card-body'>
              <p>Some projects of mine are listed here !</p>
            </blockquote>
          </Card>
          <Card className='text-center'>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional content.{' '}
              </Card.Text>
              <Card.Text>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img src='holder.js/100px160' />
          </Card>
          <Card className='text-right'>
            <blockquote className='blockquote mb-0 card-body'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
              <footer className='blockquote-footer'>
                <small className='text-muted'>
                  Someone famous in <cite title='Source Title'>Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This card has even longer content than the first to show that equal height
                action.
              </Card.Text>
              <Card.Text>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </Col>
    </div>
  );
};

export default Projects;
