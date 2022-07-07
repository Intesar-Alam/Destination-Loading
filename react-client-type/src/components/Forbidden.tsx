import Card from 'react-bootstrap/Card';

import JumboImage from '../images/403.jpg';

function Forbidden() {
    return (
      <>
        <Card className="text-black rounded-0 col-md-10 mx-auto my-5">

            <Card.Body className="text-center">
              <Card.Title className="cardTitle404">Error 403</Card.Title>
              <Card.Text className="cardText404">
                Sorry, you are not permitted to access this page. Please <a href="/login">login</a> for access.
              </Card.Text>
              <Card.Text className="cardText404">
                If you need help or should have access, please <a href="/contact">contact us</a>.
              </Card.Text>
            </Card.Body>
            <Card.Img src={JumboImage} alt="Card image" className="rounded-0" />
        </Card>
      </>
    );
  }
  
  export default Forbidden;