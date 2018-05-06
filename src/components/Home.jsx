import React, {Component} from 'react';
import {Link} from 'react-router-dom'; //from react-router library
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render(){
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Data Science Resources</h2>
          <p>A blog to write about current trends and tools used in the data science community.s
          </p>
        </Jumbotron>
        <Link to="/about">
          <Button bsStyle="primary">About </Button>
        </Link>
      </Grid>
    );
  }
}
