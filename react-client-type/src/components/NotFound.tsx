import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import JumboImage from '../images/travelers.jpg';

// TODO add links to buttons so they go to the right pages! 
// TODO styling, new photo
function NotFound() {
  return (
    <>
      <Card className="text-white rounded-0 col-md-10 mx-auto my-5">
        <Card.Img src={JumboImage} alt="Card image" className="rounded-0" />
        <Card.ImgOverlay>
          <Card.Title style={{ fontSize: "36px" }}>Error</Card.Title>
          <Card.Text style={{ fontSize: "100px" }}>
            404
          </Card.Text>
          <Card.Text className="text-dark">
            There seems to be an error, we don't want you to miss your trip please go to our <Button>Home</Button> or <Button className="float-right">Contact Us</Button> for more information.
          </Card.Text>
          
          
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default NotFound;