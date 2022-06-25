drop database if exists destination_loading_test;
create database destination_loading_test;
use destination_loading_test;

create table user_account (
	user_account_id int primary key auto_increment,
    email varchar(150) not null unique,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    address varchar(2048) null,
    phone varchar(20) null,
    dob date null
);

create table transport_company (
	company_id int primary key auto_increment,
    company_name varchar(100) not null,
    company_url varchar(200) not null,
    company_icon varchar(200) not null,
    transportation_mode varchar(50) not null
);

create table reservation (
	reservation_id int primary key auto_increment,
    user_account_id int not null,
    company_id int not null,
    reservation_date date not null,
    reservation_code varchar(50) not null,
    constraint fk_reservation_app_user_account_id
		foreign key (user_account_id)
        references user_account(user_account_id),
	constraint fk_reservation_company_id
		foreign key (company_id)
        references transport_company(company_id)
);

delimiter //
create procedure set_known_good_state()
begin
truncate table user_account;
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob) values (1, 'cbenedit0@cnn.com', 'Cherida', 'Benedit', '72876 Hooker Lane', '452-329-5337', '11/7/1994');
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob) values (2, 'bwoolerton1@seattletimes.com', 'Blondelle', 'Woolerton', '48581 Fremont Drive', '986-652-8605', '9/21/2000');
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob) values (3, 'aimpson2@bbb.org', 'Amberly', 'Impson', '2 Evergreen Avenue', '619-846-9881', '1/15/2000');
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob) values (4, 'geverit3@t-online.de', 'Griffie', 'Everit', '9415 Schlimgen Pass', '739-723-4664', '2/25/2004');
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob) values (5, 'abert4@t-online.de', 'Augustus', 'Bert', '82 Alpine Way', '762-817-3029', '8/28/1993');
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob) values (6, 'madlard5@ed.gov', 'Maryanne', 'Adlard', '288 Dwight Point', '437-352-9224', '12/17/2000');
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob) values (7, 'pavramovic6@t-online.de', 'Paloma', 'Avramovic', '696 Dayton Terrace', '251-337-2149', '2/1/2003');
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob) values (8, 'mdillimore7@ehow.com', 'Madelaine', 'Dillimore', '5311 Carberry Road', '414-306-3890', '2/2/1991');
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob) values (9, 'kpolgreen8@japanpost.jp', 'Kenton', 'Polgreen', '96 Vermont Way', '659-119-0226', '7/31/1998');
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob) values (10, 'jkilmartin9@gov.uk', 'Jabez', 'Kilmartin', '908 Marcy Terrace', '774-548-1651', '8/10/2000');

truncate table transport_company;
insert into transport_company (company_id, company_name, company_url, company_icon, transportation_mode) values (1, 'Russel-Christiansen', 'https://jalbum.net/at/dolor/quis/odio.xml?sit=est&amet=et&sem=tempus&fusce=semper&consequat=est&nulla=quam&nisl=pharetra&nunc=magna&nisl=ac&duis=consequat&bibendum=metus&felis=sapien&sed=ut&interdum=nunc&venenatis=vestibulum&turpis=ante&enim=ipsum&blandit=primis&mi=in&in=faucibus&porttitor=orci&pede=luctus&justo=et&eu=ultrices&massa=posuere&donec=cubilia&dapibus=curae&duis=mauris&at=viverra&velit=diam&eu=vitae&est=quam&congue=suspendisse&elementum=potenti&in=nullam&hac=porttitor&habitasse=lacus&platea=at&dictumst=turpis&morbi=donec&vestibulum=posuere&velit=metus&id=vitae&pretium=ipsum&iaculis=aliquam&diam=non&erat=mauris&fermentum=morbi&justo=non&nec=lectus&condimentum=aliquam&neque=sit&sapien=amet&placerat=diam&ante=in&nulla=magna&justo=bibendum&aliquam=imperdiet&quis=nullam&turpis=orci&eget=pede&elit=venenatis&sodales=non&scelerisque=sodales&mauris=sed&sit=tincidunt', 'http://dummyimage.com/208x100.png/ff4444/ffffff', 'AIR');
insert into transport_company (company_id, company_name, company_url, company_icon, transportation_mode) values (2, 'Roberts, Terry and Bartoletti', 'http://miitbeian.gov.cn/odio/cras/mi/pede/malesuada/in.html?commodo=tempor&placerat=convallis&praesent=nulla&blandit=neque&nam=libero&nulla=convallis&integer=eget&pede=eleifend&justo=luctus&lacinia=ultricies&eget=eu&tincidunt=nibh&eget=quisque&tempus=id&vel=justo&pede=sit', 'http://dummyimage.com/106x100.png/5fa2dd/ffffff', 'RAIL');
insert into transport_company (company_id, company_name, company_url, company_icon, transportation_mode) values (3, 'Osinski, Tremblay and Steuber', 'http://geocities.jp/eros/viverra/eget/congue/eget/semper.js?in=magnis&sagittis=dis&dui=parturient&vel=montes&nisl=nascetur&duis=ridiculus&ac=mus&nibh=etiam&fusce=vel&lacus=augue&purus=vestibulum', 'http://dummyimage.com/139x100.png/5fa2dd/ffffff', 'GROUND');
insert into transport_company (company_id, company_name, company_url, company_icon, transportation_mode) values (4, 'Stark-Howe', 'http://princeton.edu/faucibus/orci/luctus/et/ultrices/posuere/cubilia.json?curabitur=montes&gravida=nascetur&nisi=ridiculus&at=mus&nibh=vivamus&in=vestibulum&hac=sagittis&habitasse=sapien&platea=cum&dictumst=sociis&aliquam=natoque&augue=penatibus&quam=et&sollicitudin=magnis&vitae=dis&consectetuer=parturient&eget=montes&rutrum=nascetur&at=ridiculus&lorem=mus&integer=etiam&tincidunt=vel&ante=augue&vel=vestibulum&ipsum=rutrum&praesent=rutrum&blandit=neque&lacinia=aenean&erat=auctor&vestibulum=gravida&sed=sem&magna=praesent&at=id&nunc=massa&commodo=id&placerat=nisl&praesent=venenatis&blandit=lacinia&nam=aenean&nulla=sit&integer=amet&pede=justo&justo=morbi&lacinia=ut&eget=odio&tincidunt=cras&eget=mi&tempus=pede&vel=malesuada&pede=in&morbi=imperdiet&porttitor=et&lorem=commodo&id=vulputate&ligula=justo&suspendisse=in&ornare=blandit&consequat=ultrices&lectus=enim&in=lorem', 'http://dummyimage.com/178x100.png/5fa2dd/ffffff', 'WATER');
insert into transport_company (company_id, company_name, company_url, company_icon, transportation_mode) values (5, 'Stroman, Kerluke and Considine', 'http://tinyurl.com/nisi/venenatis.png?leo=turpis&odio=enim&porttitor=blandit&id=mi&consequat=in', 'http://dummyimage.com/188x100.png/cc0000/ffffff', 'RAIL');
insert into transport_company (company_id, company_name, company_url, company_icon, transportation_mode) values (6, 'Rempel, Gottlieb and Bartell', 'http://gizmodo.com/aliquam/sit.json?eget=nonummy&tincidunt=maecenas&eget=tincidunt&tempus=lacus&vel=at&pede=velit&morbi=vivamus&porttitor=vel&lorem=nulla&id=eget&ligula=eros', 'http://dummyimage.com/211x100.png/cc0000/ffffff', 'AIR');

truncate table reservation;
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code) values (1, 1, 1, '6/12/2023', '65044-3565');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code) values (2, 2, 2, '10/6/2023', '57955-2705');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code) values (3, 3, 3, '5/26/2023', '54868-5000');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code) values (4, 4, 4, '5/4/2023', '57826-460');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code) values (5, 5, 5, '2/4/2022', '0268-1105');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code) values (6, 6, 6, '4/6/2022', '76159-001');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code) values (7, 7, 7, '1/12/2023', '67544-355');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code) values (8, 8, 8, '1/17/2023', '51346-104');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code) values (9, 9, 9, '1/21/2024', '59535-1101');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code) values (10, 10, 10, '11/28/2023', '0904-5259');
end //
delimiter ;