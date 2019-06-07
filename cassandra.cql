
DROP KEYSPACE IF EXISTS listinginfo;

CREATE KEYSPACE listinginfo WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'};

USE listinginfo;

DROP TABLE IF EXISTS listinginfo1;

CREATE TABLE listinginfo1(
bathrooms int,
bedrooms int,
beds int,
capacity int,
Headers text,
hometype text,
hostName text,
id int PRIMARY KEY,
longDescription text,
neighborhood text,
PrimTrait text,
secondTrait text,
tertTrait text,
Wifi boolean,
Laptop_friendly_workspace boolean,
Air_conditioning boolean,
Kitchen boolean,
Washer boolean,
Free_parking_on_premise boolean,
Iron boolean,
Essentials boolean,
Tv boolean,
Hot_water boolean,
Pool boolean,
Cooking_basics boolean,
Dishes_and_silverware boolean,
Refrigerator boolean,
Oven boolean,
Stove boolean,
Hangers boolean,
Shampoo boolean,
Extra_pillow_and_blanket boolean,
Carbon_monoxide_detector boolean,
Smoke_Detector boolean,
First_aid_kit boolean,
Bed_linens boolean,
Private_entrance boolean,
Elevator boolean,
Hot_tub boolean);

