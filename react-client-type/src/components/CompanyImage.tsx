import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';

import AIR from '../images/companies/AIR.png';
import RAIL from '../images/companies/RAIL.png';
import GROUND from '../images/companies/GROUND.png';
import WATER from '../images/companies/WATER.png';
import AlaskaAirlines from '../images/companies/AlaskaAirlines.png';
import AmericanAirlines from '../images/companies/AmericanAirlines.png';
import Delta from '../images/companies/Delta.png';
import JetBlue from '../images/companies/JetBlue.png';
import Amtrak from '../images/companies/Amtrak.png';
import Brightline from '../images/companies/Brightline.png';

export interface company {
  companyName: string,
  icon: string,
  url: string,
  transportationMode: string
}

function CompanyImage({companyName, icon, url, transportationMode}: company) {
  const [JumboImage, setJumboImage] = useState<any>(null);
  
  useEffect(() => {
    switch (transportationMode) {
      case "AIR":
        switch (companyName) {
          case "Alaska Airlines":
            setJumboImage(AlaskaAirlines);
            break;
          case "American Airlines":
            setJumboImage(AmericanAirlines);
            break;
          case "Delta Air Lines":
            setJumboImage(Delta);
            break;
          case "JetBlue":
            setJumboImage(JetBlue);
            break;
          default:
            setJumboImage(AIR);
        }
        break;
      case "RAIL":
        switch (companyName) {
          case "Amtrak":
            setJumboImage(Amtrak);
            break;
          case "Brightline":
            setJumboImage(Brightline);
            break;
          default:
            setJumboImage(RAIL);
        }
        break;
      case "GROUND":
        setJumboImage(GROUND);
        break;
      case "WATER":
        setJumboImage(WATER);
        break;
      default:
        setJumboImage(AIR);
        break;
    }
  }, []);

  return(
    <>
    <Container>
      <Card.Img src={JumboImage} />
    </Container>
    </>
  )
}

export default CompanyImage;