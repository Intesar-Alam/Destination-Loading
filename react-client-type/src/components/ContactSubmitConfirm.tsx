import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import JumboImage from '../images/travelers.jpg';

// TODO new image/page styling
function NotFound() {
  return (
    <>
      <Card className="text-primary rounded-0 col-md-10 mx-auto my-5">
        <Card.Img src={JumboImage} alt="Card image" className="rounded-0" />
        <Card.ImgOverlay>
          <Card.Title style={{ fontSize: "100px" }} className="text-center">Thank you for your message!</Card.Title>
          <Card.Text style={{ fontSize: "50px" }} className="text-center">
            We will respond as soon as we have staff!
          </Card.Text>
          <Card.Text className="text-dark">
            <Link to="/" className="btn btn-primary">Home</Link>
          </Card.Text>
          
          
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default NotFound;