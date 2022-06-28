drop database if exists destination_loading;
create database destination_loading;
use destination_loading;


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

create table reservations (
	reservation_id int primary key auto_increment,
    user_account_id int not null,
    company_id int not null,
    reservation_date date not null,
    reservation_code varchar(50) not null,
    constraint fk_reservations_app_user_account_id
		foreign key (user_account_id)
        references user_account(user_account_id),
	constraint fk_reservations_company_id
		foreign key (company_id)
        references transport_company(company_id)
);

