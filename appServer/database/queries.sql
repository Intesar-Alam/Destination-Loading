use destination_loading;

select * from user_account;

select app_user_id, email, first_name, last_name, address, phone, dob
from user_account
order by app_user_id, last_name asc;

select * from transport_company;

select company_id, company_name, company_url, company_icon, transportation_mode
from transport_company
order by company_id, company_name asc;

select * from reservation;

select reservation_id, app_user_id, company_id, reservation_date, reservation_code
from reservation
order by reservation_date, reservation_id asc;

call set_known_good_state();

select * from user_account;

select * from transport_company;

select * from reservation;