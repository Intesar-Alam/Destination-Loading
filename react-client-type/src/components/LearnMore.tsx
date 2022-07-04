
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import JumboImage from '../images/travelers.jpg';


// TODO styling, add photos, bios, and real text
function LearnMore() {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">Learn More</h1>
        <Container>
          <h2 className="mb-3">What is Destination Loading...<i className="bi bi-compass"></i></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aliquam ullam, nulla voluptatum incidunt blanditiis numquam similique harum vero autem quaerat magnam velit a possimus culpa optio voluptate accusantium iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim consequuntur maiores, eligendi dicta modi quos facilis eos aspernatur aperiam veritatis doloremque corporis ullam, accusantium cumque numquam sunt quod dolorem!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequatur accusantium odio eligendi tempore maiores, dolores iure excepturi ullam voluptatibus, rem facere dolorum non ex totam pariatur nobis magni. Architecto!</p>
        </Container>
        <Row>
          <Col sm={{ offset: 5 }}>
            <Button className="btn btn-lg my-3">Sign-Up Now!</Button>
          </Col>
        </Row>

        <Container>
          <h2 className="mb-3">Meet the Team!</h2>
          <Card className="mb-3">
            <Row>
              <Col className="col-md-4">
                <Card.Img src={JumboImage} />
              </Col>
              <Col className="col-md-8">
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequatur accusantium odio eligendi tempore maiores, dolores iure excepturi ullam voluptatibus, rem facere dolorum non ex totam pariatur nobis magni. Architecto!</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-3">
            <Row>
              <Col className="col-md-8">
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequatur accusantium odio eligendi tempore maiores, dolores iure excepturi ullam voluptatibus, rem facere dolorum non ex totam pariatur nobis magni. Architecto!</Card.Text>
                </Card.Body>
              </Col>
              <Col className="col-md-4">
                <Card.Img src={JumboImage} />
              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col className="col-md-4">
                <Card.Img src={JumboImage} />
              </Col>
              <Col className="col-md-8">
                <Card.Body>
                  <Card.Title>Name</Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequatur accusantium odio eligendi tempore maiores, dolores iure excepturi ullam voluptatibus, rem facere dolorum non ex totam pariatur nobis magni. Architecto!</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>

        {/* <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="..." class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    </>
  );
}

export default LearnMore;