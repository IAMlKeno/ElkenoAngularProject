use slickbikes;

INSERT INTO slickbikes.dbo.users(first_name, last_name, password, username)
VALUES ('Elkeno', 'Jones', 'super', 'super');

INSERT INTO slickbikes.dbo.bikes (description, price, quantity_on_hand, bike_type, name)
values ('Heavy duty, rugged bike', 355.00, 5, 3, 'Mountain Baby'),
		('Slick, speedy', 400.00, 3, 2, 'Speedy'),
		('Slim, smooth ride', 150.00, 10, 1, 'Smooth');