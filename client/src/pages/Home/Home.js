import React, { Component } from "react";
import { Jumbotron, Button, Col, Row, Container } from 'reactstrap';
import API from "../../utils/API";
import "./Home.css";
// import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    results: [],
    username: "",
    password: ""
  };

  componentDidMount() {
    this.welcomeScreen();
  }

  welcomeScreen = () => {
    // API.getBooks()
    //   .then(res =>
    //     this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //   )
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={{ size: 4, offset: 4 }} md={{size: 6, offset: 3}} sm={12} xs={12}>
            <Jumbotron>
              <h1>JEM Finder</h1>
              <p>The world's most advanced</p>
              <p>automotive research app</p>
            </Jumbotron>
              <Button
                tag="a"
                color="success"
                size="large"
                href="/research"
	    >
	      Search Reviews
	    </Button>
	    <Button
	      tag="a"
	      color="success"
	      size="large"
	      href="/dashboard"
	    >
	      Compare Cars
	    </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
