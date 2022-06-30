drop database if exists destination_loading;
create database destination_loading;
use destination_loading;


create table transport_company (
	company_id int primary key auto_increment,
    company_name varchar(100) not null,
    company_url varchar(200) not null,
    company_icon varchar(200) not null,
    transportation_mode varchar(50) not null
);

create table app_user (
    app_user_id int primary key auto_increment,
    username varchar(50) not null unique,
    password_hash varchar(2048) not null,
    disabled bit not null default(0),
    company_id int null,
    constraint fk_app_user_company_id
		foreign key (company_id)
        references transport_company(company_id)
);

create table app_role (
    app_role_id int primary key auto_increment,
    `name` varchar(50) not null unique
);

create table app_user_role (
    app_user_id int not null,
    app_role_id int not null,
    constraint pk_app_user_role
        primary key (app_user_id, app_role_id),
    constraint fk_app_user_role_user_id
        foreign key (app_user_id)
        references app_user(app_user_id),
    constraint fk_app_user_role_role_id
        foreign key (app_role_id)
        references app_role(app_role_id)
);


create table user_account (
	app_user_id int not null,
    email varchar(150) not null unique,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    address varchar(2048) null,
    phone varchar(20) null,
    dob date null,
    constraint pk_user_account
		primary key (app_user_id)

);


create table reservation (
	reservation_id int primary key auto_increment,
    app_user_id int not null,
    company_id int not null,
    reservation_date date not null,
    reservation_code varchar(50) not null,
    reservation_title varchar(80) not null,
    constraint fk_reservation_app_user_id
		foreign key (app_user_id)
        references app_user(app_user_id),
	constraint fk_reservation_company_id
		foreign key (company_id)
        references transport_company(company_id)
);

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

insert into app_role (`name`) values
    ('USER'),
    ('REP'),
    ('ADMIN');

insert into app_user (username, password_hash, disabled, company_id)
	values
    ('reediejason@gmail.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 0, null),
    ('chip@fortnite.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 0, 1),
    ('steve@smith.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 0, null),
    ('john@john.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 0, null),
    ('mikey@yahoo.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 0, 3);

    insert into app_user_role
    values
    (1, 3),
    (2, 2),
    (3, 1),
    (4, 1),
    (5, 2);

    --
    insert into user_account (app_user_id, email, first_name, last_name, address, phone, dob)
    values
    (2, 'chip@fortnite.com', 'Chip', 'Wim', '72876 Hooker Lane', '452-329-5337', '1994-11-07'),
    (3, 'steve@smith.com', 'Steve', 'Smith', null, '986-652-8605', '2000-09-21'),
    (4, 'john@john.com', 'John', 'Connor', '2 Evergreen Avenue', '619-846-9881', '2004-02-25'),
    (5, 'mikey@yahoo.com', 'Mikey', 'Booker', '82 Alpine Way', '762-817-3029', '1993-08-23')
    ;

    insert into reservation(app_user_id, company_id, reservation_date, reservation_code, reservation_title)
    values
    (3, 1, '2023-10-23', '57955-2705', 'Birthday Weekend'),
    (3, 3, '2023-05-26', '54868-5000', 'Holiday'),
    (4, 1, '2023-06-12', '65044-3565', 'Barbados trip');



