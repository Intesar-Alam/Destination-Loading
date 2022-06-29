use destination_loading;

-- drop table if exists transport_company;

-- create table transport_company (
-- 	company_id int primary key auto_increment,
--     company_name varchar(100) not null,
--     company_url varchar(200) not null,
--     company_icon varchar(200) not null,
--     transportation_mode varchar(50) not null
-- );

insert into transport_company (company_name, company_url, company_icon, transportation_mode) values
("Alaska Airlines","https://www.alaskaair.com/","https://resource.alaskaair.net/favicon.ico","AIR"),
("Allegiant Air","https://www.allegiantair.com/","https://www.allegiantair.com/favicon.ico","AIR"),
("American Airlines","https://www.aa.com/","https://www.aa.com/favicon.ico","AIR"),
("Delta Air Lines","https://www.delta.com/","https://www.delta.com/etc/designs/global/favicon.ico","AIR"),
("Frontier Airlines","https://www.flyfrontier.com/","https://f9prodcdn.azureedge.net/favicon/favicon.ico","AIR"),
("Hawaiian Airlines","https://www.hawaiianairlines.com/","https://www.hawaiianairlines.com/favicon.ico","AIR"),
("JetBlue","https://www.jetblue.com/","https://www.jetblue.com/ui-assets/favicon/favicon-32x32.png","AIR"),
("Southwest Airlines","https://www.southwest.com/","https://www.southwest.com/favicon.ico","AIR"),
("Spirit Airlines","https://www.spirit.com/","https://www.spirit.com/favicon.ico?v=2","AIR"),
("United Airlines","https://www.united.com/","https://www.united.com/favicon.ico","AIR"),
("Advanced Air","https://www.advancedairlines.com/","https://www.advancedairlines.com/favicon-32x32.png?v=0e5058648d4f785c37f81ffd98893215","AIR"),
("Air Choice One","https://airchoiceone.com/","https://airchoiceone.com/themes/custom/airchoiceone/favicon.ico","AIR"),
("Bering Air","https://www.beringair.com/","https://www.beringair.com/wp-content/themes/bering-air/favicon.ico","AIR"),
("Boutique Air","https://www.boutiqueair.com/","https://www.boutiqueair.com/favicon/favicon.ico","AIR"),
("Breeze Airways","https://www.flybreeze.com/","https://www.flybreeze.com/favicon.ico","AIR"),
("Cape Air","https://www.capeair.com/","https://www.capeair.com/img/theme/favicon.png","AIR"),
("Contour Airlines","https://www.contourairlines.com/","https://www.contourairlines.com/templates/hititcs/favicon.ico","AIR"),
("JSX","https://www.jsx.com/","https://www.jsx.com/favicon.ico","AIR"),
("Vieques Air Link","https://www.viequesairlink.com/","https://www.viequesairlink.com/mt-content/uploads/2015/12/favicon.ico?_build=1458862020","AIR"),
("Air Canada","https://www.aircanada.com/","https://www.aircanada.com/etc/designs/aircanada/images/favicon.ico","AIR"),
("WestJet","https://www.westjet.com/","https://www.westjet.com/favicon.ico","AIR"),
("Air Transat","https://www.airtransat.com/","https://www.airtransat.com/favicon.ico","AIR"),
("Porter Airlines","https://www.flyporter.com/","https://www.flyporter.com/Content/favicon.ico?version=9.0.6.0a","AIR"),
("Flair Airlines","https://flyflair.com/","https://flyflair.com/images/favicon.png","AIR"),
("Amtrak","https://www.amtrak.com/","https://www.amtrak.com/etc/designs/dotcom-assets/images/favicon.ico","RAIL"),
("Via Rail","https://www.viarail.ca/","https://www.viarail.ca/favicon.ico","RAIL"),
("Brightline","https://www.gobrightline.com/","https://www.gobrightline.com/media/favicon.png","RAIL"),
("Ontario Northland","https://www.ontarionorthland.ca/","https://www.ontarionorthland.ca/themes/custom/ontarionorthland/favicon.ico","GROUND"),
("FlixBus","https://www.flixbus.com/","https://cdn-cf.cms.flixbus.com/drupal-assets/favicon/flixbus/favicon-32x32.png","GROUND"),
("MegaBus","https://us.megabus.com/","https://us.megabus.com/favicon.ico","GROUND"),
("Greyhound","https://www.greyhound.com/","https://www.greyhound.com/content/images/favicon/favicon.ico","GROUND"),
("Norwegian","https://www.ncl.com/","https://www.ncl.com/assets/v1/images/favicon/favicon.png?v=1656015855742","WATER"),
("Carnival","https://www.carnival.com/","https://www.carnival.com/favicon.ico","WATER"),
("Disney Cruise Line","https://disneycruise.disney.go.com/","https://disneycruise.disney.go.com/favicon.ico","WATER");

select * from transport_company;