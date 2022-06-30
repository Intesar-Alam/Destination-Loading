
import Card from 'react-bootstrap/Card';

import JumboImage from '../images/travelers.jpg';

import AdminMenuBar from './AdminMenuBar';

function SiteAnalytics() {
  return (
    <>
    <AdminMenuBar />
      <Card className="text-white rounded-0 col-md-10 mx-auto my-5">
        <Card.Img src={JumboImage} alt="Card image" className="rounded-0" />
        <Card.ImgOverlay>
          <Card.Title className="text-center" style={{ fontSize: "48px" }}>New Features Coming Soon!!</Card.Title>
          <Card.Text className="text-center" style={{ fontSize: "48px" }}>Checkback later for our latest improvements!</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default SiteAnalytics;