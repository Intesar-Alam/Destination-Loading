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
        <Card.ImgOverlay className="mx-auto my-auto rounded-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', width: '96%', height: '95%' }}>
          <Card.Body className="text-center">
            <Card.Title style={{ fontSize: '5rem', fontWeight: 'bold' }}>Thank you for contacting us!</Card.Title>
            <Card.Text style={{ fontSize: '3rem', fontWeight: 'bold' }}>
            We will respond as soon as we have staff.
            </Card.Text>
            <Card.Text style={{ fontSize: '3rem', fontWeight: 'bold' }}>
              Please head back to the <a href="/">homepage</a>.
            </Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default NotFound;