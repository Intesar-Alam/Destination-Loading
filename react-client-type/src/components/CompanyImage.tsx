import { useState, useEffect } from 'react';

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
import Flixbus from '../images/companies/Flixbus.jpg';
import Greyhound from '../images/companies/Greyhound.jpg';
import United from '../images/companies/United.jpg';
import Via from '../images/companies/Via.png';

export interface Company {
  companyName?: string,
  icon?: string,
  url?: string,
  transportationMode?: string
}

function CompanyImage({ companyName, icon, url, transportationMode }: Company) {
  const [JumboImage, setJumboImage] = useState<any>(null);
  const [altText, setAltText] = useState<string>("Generic Travel photo");

  useEffect(() => {
    switch (transportationMode) {
      case "AIR":
        switch (companyName) {
          case "Alaska Airlines":
            setJumboImage(AlaskaAirlines);
            setAltText("Alaska Airlines plane in the sky");
            break;
          case "American Airlines":
            setJumboImage(AmericanAirlines);
            setAltText("American Airlines plane in the sky");
            break;
          case "Delta Air Lines":
            setJumboImage(Delta);
            setAltText("Delta Airlines plane in the sky");
            break;
          case "JetBlue":
            setJumboImage(JetBlue);
            setAltText("JetBlue plane in the sky");
            break;
          case "United Airlines":
            setJumboImage(United);
            setAltText("JetBlue plane in the sky");
            break;
          default:
            setJumboImage(AIR);
            setAltText("Plane in the sky");
        }
        break;
      case "RAIL":
        switch (companyName) {
          case "Amtrak":
            setJumboImage(Amtrak);
            setAltText("Amtrak Train");
            break;
          case "Brightline":
            setJumboImage(Brightline);
            setAltText("BrightLine Train");
            break;
          case "Via Rail":
            setJumboImage(Via);
            setAltText("Via Rail Train");
            break;
          default:
            setJumboImage(RAIL);
            setAltText("Train");
        }
        break;
      case "GROUND":
        switch (companyName) {
          case "FlixBus":
            setJumboImage(Flixbus);
            setAltText("Flix bus");
            break;
          case "Greyhound":
            setJumboImage(Greyhound);
            setAltText("Greyhound bus");
            break;
          default:
            setJumboImage(GROUND);
            setAltText("Bus");
        }
        break;
      case "WATER":
        setJumboImage(WATER);
        setAltText("Cruise Ship");
        break;
      default:
        setJumboImage(AIR);
        setAltText("Plane in the sky");
        break;
    }
  }, []);

  return (
    <>
      <Card.Img src={JumboImage} alt={altText} />
    </>
  )
}

export default CompanyImage;