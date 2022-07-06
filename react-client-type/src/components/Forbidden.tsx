import Card from 'react-bootstrap/Card';

import JumboImage from '../images/403.jpg';

function NotFound() {
    return (
      <>
        <Card className="text-black rounded-0 col-md-10 mx-auto my-5">
          <Card.Img src={JumboImage} alt="Card image" className="rounded-0" />
          <Card.ImgOverlay className="mx-auto my-auto rounded-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', width: '96%', height: '95%' }}>
            <Card.Body className="text-center">
              <Card.Title style={{ fontSize: '7rem' }}>Error 404</Card.Title>
              <Card.Text style={{ fontWeight: 'bold' }}>
                Sorry, you are not permitted to access this page.
              </Card.Text>
              <Card.Text style={{ fontWeight: 'bold' }}>
                We don't want you to miss your trip, so please head back to the <a href="/">homepage</a>!
              </Card.Text>
              <Card.Text style={{ fontWeight: 'bold' }}>
                If you need help or reached this page in error, please <a href="/contact">contact us</a>.
              </Card.Text>
            </Card.Body>
          </Card.ImgOverlay>
        </Card>
      </>
    );
  }
  
  export default NotFound;