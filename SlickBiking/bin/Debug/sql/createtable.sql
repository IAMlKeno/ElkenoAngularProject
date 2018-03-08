use [slickbikes];

CREATE TABLE users (
	id int IDENTITY(1,1) PRIMARY KEY,
	first_name varchar(128),
	last_name varchar(128),
	password varchar(255),
	username varchar(255)
);
	
CREATE TABLE biketypes (
	id int IDENTITY(1,1) PRIMARY KEY,
	description varchar(128)
)

CREATE TABLE bikes (
	id int IDENTITY(1,1) PRIMARY KEY,
	description varchar(255),
	price decimal,
	quantity_on_hand int,
	bike_type varchar(128),
	name varchar(255),
	bike_type_id int FOREIGN KEY REFERENCES biketypes(id)
);
