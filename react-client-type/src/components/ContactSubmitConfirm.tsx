import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import JumboImage from '../images/travelers.jpg';

// TODO new image/page styling
function NotFound() {
  return (
    <>
      <Card className="text-black rounded-0 col-md-10 mx-auto my-5">
        <Card.Img src={JumboImage} alt="Card image" className="rounded-0" />
        <Card.ImgOverlay className="imgOverlay mx-auto my-auto rounded-0">
          <Card.Body className="text-center">
            <Card.Title className="cardTitle">Thank you for contacting us!</Card.Title>
            <Card.Text className="cardText">
            We will respond as soon as we have staff.
            </Card.Text>
            <Card.Text className="cardText">
              Please head back to the <a href="/">homepage</a>.
            </Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default NotFound;