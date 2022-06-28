drop database if exists destination_loading_test;
create database destination_loading_test;
use destination_loading_test;



create table app_user (
    app_user_id int primary key auto_increment,
    username varchar(50) not null unique,
    password_hash varchar(2048) not null,
    disabled bit not null default(0)
);


create table user_account (
	user_account_id int primary key auto_increment,
    email varchar(150) not null unique,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    address varchar(2048) null,
    phone varchar(20) null,
    dob date null,
	app_user_id int not null,
    constraint fk_user_account_app_user_id
		foreign key (app_user_id)
        references app_user(app_user_id)
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
    reservation_title varchar(80) not null,
    constraint fk_reservation_user_account_id
		foreign key (user_account_id)
        references user_account(user_account_id),
	constraint fk_reservation_company_id
		foreign key (company_id)
        references transport_company(company_id)
);

delimiter //
create procedure set_known_good_state()
begin

delete from reservation;
alter table reservation auto_increment = 1;
delete from user_account;
alter table user_account auto_increment = 1;
delete from transport_company;
alter table transport_company auto_increment = 1;
delete from app_user;
alter table app_user auto_increment = 1;



insert into app_user (app_user_id, username, password_hash, disabled) values (1, 'svasyanin0', 'ZKFZYc', 0);
insert into app_user (app_user_id, username, password_hash, disabled) values (2, 'jousby1', 'CwmSzz', 1);
insert into app_user (app_user_id, username, password_hash, disabled) values (3, 'amclarnon2', 'GTAiBQ', 0);
insert into app_user (app_user_id, username, password_hash, disabled) values (4, 'raggiss3', 'SB89wV', 0);
insert into app_user (app_user_id, username, password_hash, disabled) values (5, 'wstocker4', 'J5jDP3', 1);
insert into app_user (app_user_id, username, password_hash, disabled) values (6, 'bchesnay5', 'n2N6l4PhTz', 0);
insert into app_user (app_user_id, username, password_hash, disabled) values (7, 'fjosephi6', '7jHrTL7jxr5V', 1);
insert into app_user (app_user_id, username, password_hash, disabled) values (8, 'tjorg7', 'UgnUH18', 1);
insert into app_user (app_user_id, username, password_hash, disabled) values (9, 'vjosskovitz8', '1pKSyKjwtV', 0);
insert into app_user (app_user_id, username, password_hash, disabled) values (10, 'ojammes9', 'zoBu0gNhw', 0);



insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob, app_user_id) values (1, 'cbenedit0@cnn.com', 'Cherida', 'Benedit', '72876 Hooker Lane', '452-329-5337', '1994-11-07', 1);
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob, app_user_id) values (2, 'bwoolerton1@seattletimes.com', 'Blondelle', 'Woolerton', '48581 Fremont Drive', '986-652-8605', '2000-09-21', 1);
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob, app_user_id) values (3, 'aimpson2@bbb.org', 'Amberly', 'Impson', '2 Evergreen Avenue', '619-846-9881', '2000-01-15', 1);
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob, app_user_id) values (4, 'geverit3@t-online.de', 'Griffie', 'Everit', '9415 Schlimgen Pass', '739-723-4664', '2004-02-25', 1);
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob, app_user_id) values (5, 'abert4@t-online.de', 'Augustus', 'Bert', '82 Alpine Way', '762-817-3029', '1993-08-23', 2);
insert into user_account (user_account_id, email, first_name, last_name, address, phone, dob, app_user_id) values (6, 'madlard5@ed.gov', 'Maryanne', 'Adlard', '288 Dwight Point', '437-352-9224', '2000-10-13', 1);



insert into transport_company (company_id, company_name, company_url, company_icon, transportation_mode) values
(1,"Alaska Airlines","https://www.alaskaair.com/","https://resource.alaskaair.net/favicon.ico","AIR"),
(2,"Allegiant Air","https://www.allegiantair.com/","https://www.allegiantair.com/favicon.ico","AIR"),
(3,"American Airlines","https://www.aa.com/","https://www.aa.com/favicon.ico","AIR"),
(4,"Delta Air Lines","https://www.delta.com/","https://www.delta.com/etc/designs/global/favicon.ico","AIR"),
(5,"Frontier Airlines","https://www.flyfrontier.com/","https://f9prodcdn.azureedge.net/favicon/favicon.ico","AIR"),
(6,"Hawaiian Airlines","https://www.hawaiianairlines.com/","https://www.hawaiianairlines.com/favicon.ico","AIR"),
(7,"JetBlue","https://www.jetblue.com/","https://www.jetblue.com/ui-assets/favicon/favicon-32x32.png","AIR");




insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code, reservation_title) values (1, 1, 1, '2023-06-12', '65044-3565', 'Barbados trip');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code, reservation_title) values (2, 2, 2, '2023-10-23', '57955-2705', 'Birthday Weekend');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code, reservation_title) values (3, 3, 3, '2023-05-26', '54868-5000', 'Holiday');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code, reservation_title) values (4, 4, 4, '2023-09-3', '57826-460', 'Soccer game');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code, reservation_title) values (5, 5, 1, '2022-03-16', '0268-1105', 'Other birthday weekend');
insert into reservation (reservation_id, user_account_id, company_id, reservation_date, reservation_code, reservation_title) values (6, 2, 3, '2023-04-13', '57955-2705', 'Spring break');

end //
delimiter ;