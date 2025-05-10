create table testing.roles (
	id serial primary key,
	role_name varchar(200) not null
);

create table testing.users (
	id serial primary key,
	email varchar(200) not null unique,
	password varchar(200) not null
	
);

create table testing.user_roles (
	user_id integer not null references testing.users(id),
	role_id integer not null references testing.roles(id),
	primary key (user_id, role_id)
);

create table testing.employee_details (
	id serial primary key,
	user_id integer not null references testing.users(id),
	first_name varchar not null,
	last_name varchar not null,
	date_of_birth Date,
	department varchar,
	address text
);

create table testing.leaves (
	id serial primary key,
	employee_id integer not null references testing.employee_details(id),
	leave_type varchar(200) not null,
	start_date Date,
	end_date Date
);


creating edf design