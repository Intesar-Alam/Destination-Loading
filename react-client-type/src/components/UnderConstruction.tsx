
import Card from 'react-bootstrap/Card';

import JumboImage from '../images/trainconstruction.jpg';

// TODO styling
function UnderConstruction() {
  return (
    <>
      <Card className="text-black rounded-0 col-md-10 mx-auto my-5">
        <Card.Img src={JumboImage} alt="Card image" className="rounded-0" />
        <Card.ImgOverlay className="imgOverlay mx-auto my-auto rounded-0">
          <Card.Body className="text-center">
            <Card.Title className="cardTitle">New Features Coming Soon!!</Card.Title>
            <Card.Text className="cardText">
            Checkback later for our latest improvements!
            </Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default UnderConstruction;