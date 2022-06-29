drop database if exists destination_loading;
create database destination_loading;
use destination_loading;


create table app_user (
    app_user_id int primary key auto_increment,
    username varchar(50) not null unique,
    password_hash varchar(2048) not null,
    disabled bit not null default(0)
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

--
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


