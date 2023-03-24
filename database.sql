-- Don't forget to add your create table SQL 
CREATE TABLE "list" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(50) NOT NULL,
	"quantity" varchar NOT NULL,
	"unit" varchar,
	"purchased" varchar DEFAULT 'Buy'
);

-- It is also helpful to include some test data

INSERT INTO "list" ("name", "quantity", "unit")
VALUES ('Apple', 5, 'lbs'),
('Bread', 1, 'loaf'),
('Milk', 1, 'gallon'),
('Sliced Almonds', 2, 'cups'),
('Bananas', 1, 'bunch');


