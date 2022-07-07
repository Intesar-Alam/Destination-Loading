
import Card from 'react-bootstrap/Card';

import JumboImage from '../images/404.jpeg';

// TODO add links to buttons so they go to the right pages! 
// TODO styling, new photo
function NotFound() {
  return (
    <>
      <Card className="text-black rounded-0 col-md-10 mx-auto my-5">
        
          <Card.Body className="text-center">
            <Card.Title className="cardTitle404">Error 404</Card.Title>
            <Card.Text className="cardText404">
              There seems to be an error and we couldn't find the page you were looking for.
            </Card.Text>
            <Card.Text className="cardText404">
              We don't want you to miss your trip, so please head back to the <a href="/">homepage</a>!
            </Card.Text>
            <Card.Text className="cardText404">
              If you need help or reached this page in error, please <a href="/contact">contact us</a>.
            </Card.Text>
          </Card.Body>
          <Card.Img src={JumboImage} alt="Card image" className="rounded-0" />
      </Card>
    </>
  );
}

export default NotFound;