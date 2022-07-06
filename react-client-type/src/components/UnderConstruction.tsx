
import Card from 'react-bootstrap/Card';

import JumboImage from '../images/trainconstruction.jpg';

import AdminMenuBar from './AdminMenuBar';

// TODO styling
function UnderConstruction() {
  return (
    <>
    <AdminMenuBar />
      <Card className="text-black rounded-0 col-md-10 mx-auto my-5">
        <Card.Img src={JumboImage} alt="Card image" className="rounded-0" />
        <Card.ImgOverlay className="mx-auto my-auto rounded-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', width: '96%', height: '95%' }}>
          <Card.Body className="text-center">
            <Card.Title style={{ fontSize: '5rem' }}>New Features Coming Soon!!</Card.Title>
            <Card.Text style={{ fontSize: '3rem' }}>
            Checkback later for our latest improvements!
            </Card.Text>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default UnderConstruction;