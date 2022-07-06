
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import JasonImg from '../images/people/Jason.jpg';
import IntesarImg from '../images/people/Intesar.jpg';
import AmandaImg from '../images/people/Amanda.jpg';


// TODO styling, add photos, bios, and real text
function LearnMore() {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">Learn More</h1>
        <Container>
          <h2 className="mb-3">What is Destination Loading...<i className="bi bi-compass"></i></h2>
          <p>One of the hardest things to do while being a person on the go is keeping track of all the reservations you make and those pesky confirmation codes. This is where Destination Loading...<i className="bi bi-compass"></i> comes in. Make your reservation and then store the details on our app for easy access! We also share weekly, sponsored deals and partner with online planning tools to make the most of every trip you plan.</p>
          <p> Whether you prefer to travel by land, sea, or sky we have got you covered. Start storing your reservations with us today and never forget reservation confirmation code again. Sign-up using the button below!</p>
        </Container>
        <Row>
          <Col sm={{ offset: 5 }}>
            <Button className="pageButton">Sign-Up Now!</Button>
          </Col>
        </Row>

        <Container>
          <h2 className="mb-3">Meet the Team!</h2>
          <Card className="mb-3">
            <Row>
              <Col className="col-md-4">
                <Card.Img src={JasonImg} />
              </Col>
              <Col className="col-md-8">
                <Card.Body>
                  <Card.Title>Jason</Card.Title>
                  <Card.Text>(Soon to be) junior dev from Atlantic City. I've always had a passion for tinkering and grew up jailbreaking any device I could get my hands on, building computers, and most of the time, breaking things. My dad was a contractor for most of my life, and working with him I learned a few lessons:
                    1. My body hurts and I don't want to do labor.
                    2. If something breaks, I can fix it with lots of trial and error.
                    3. My dad really hates OSHA
                    I also have 2 software engineer older brothers, but my main inspiration is Ruby, who did most of my work on this application.</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          <Card className="mb-3">
            <Row>
              <Col className="col-md-8">
                <Card.Body>
                  <Card.Title>Amanda</Card.Title>
                  <Card.Text>I am a customer service professional with a background in visual merchandising, design, and fine wine and spirits. It has been my business to create meaningful customer and client experiences, and I hope to take those skills to the next level by changing careers to develop interesting user experiences. By asking the right questions and always seeking new information, I will be an asset to any team, and I know how to pick out your new favorite bottle of wine. </Card.Text>
                </Card.Body>
              </Col>
              <Col className="col-md-4">
                <Card.Img src={AmandaImg} />
              </Col>
            </Row>
          </Card>
          <Card>
            <Row>
              <Col className="col-md-4">
                <Card.Img src={IntesarImg} />
              </Col>
              <Col className="col-md-8">
                <Card.Body>
                  <Card.Title>Intesar</Card.Title>
                  <Card.Text>I am based out in New York City. I am a joint developer, photographer, and traveler. I love going around the country, visiting new places and trying new things. I hope to work on more fun projects and travel to more places in the future!</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </Container>
    </>
  );
}

export default LearnMore;