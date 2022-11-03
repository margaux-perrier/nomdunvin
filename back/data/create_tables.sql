BEGIN;

/* droping tables to avoid conflicts*/
DROP TABLE IF EXISTS "wine", "user", "style", "dish", "region", "grapevariety", "culture", "winemaker", "compose", "taste", "eat_with", "cultivate", "order";

/*CREATE TABLES */

/*
TABLE region : Create before "wine" because wine has "region" foreign key inside
*/
CREATE TABLE IF NOT EXISTS "region"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "name" TEXT NOT NULL, 
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    "updated_at" TIMESTAMPTZ
); 

/*
TABLE winemaker : Create before "wine" because wine has "winemaker" foreign key inside
*/
CREATE TABLE IF NOT EXISTS "winemaker"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    "updated_at" TIMESTAMPTZ
);

/*
TABLE wine
*/
CREATE TABLE IF NOT EXISTS "wine"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "name" TEXT NOT NULL, 
    "description" TEXT NOT NULL, 
    "appellation" TEXT NOT NULL, 
    "size" TEXT NOT NULL, 
    "price" DECIMAL NOT NULL, 
    "alcohol" DECIMAL NOT NULL, 
    "vintage" INT NOT NULL, 
    "color" TEXT NOT NULL, 
    "avatar" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    "region_id" INT NOT NULL REFERENCES "region"("id") ON DELETE CASCADE, --when we delete region, we delete all associated wines
    "winemaker_id" INT NOT NULL REFERENCES "winemaker"("id") ON DELETE CASCADE --when we delete winemaker, we delete all associated wines
);

/*
TABLE user
*/
CREATE TABLE IF NOT EXISTS "user"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL,  
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL, 
    "password" TEXT NOT NULL, 
    "avatar" TEXT NULL, 
    "role" TEXT NULL, 
    "address_number" INT NULL, 
    "address_street" TEXT  NULL, 
    "address_postal" INT NULL, 
    "address_city" TEXT NULL, 
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    "updated_at" TIMESTAMPTZ
);

/*
TABLE style
*/
CREATE TABLE IF NOT EXISTS "style"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    "updated_at" TIMESTAMPTZ
);

/*
TABLE culture
*/
CREATE TABLE IF NOT EXISTS "culture"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    "updated_at" TIMESTAMPTZ
);

/*
TABLE grapevariety
*/
CREATE TABLE IF NOT EXISTS "grapevariety"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    "updated_at" TIMESTAMPTZ
);

/*
TABLE dish
*/
CREATE TABLE IF NOT EXISTS "dish"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    "upadated_at" TIMESTAMPTZ
);

/*
ASSOCIATION TABLES
*/

CREATE TABLE IF NOT EXISTS "compose"(
    "grapevariety_id" INT NOT NULL REFERENCES "grapevariety"("id"), 
    "wine_id" INT NOT NULL REFERENCES "wine"("id"), 
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    PRIMARY KEY ("grapevariety_id", "wine_id")
); 

CREATE TABLE IF NOT EXISTS "taste"(
    "style_id" INT NOT NULL REFERENCES "style"("id"), 
    "wine_id" INT NOT NULL REFERENCES "wine"("id"), 
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    PRIMARY KEY ("style_id", "wine_id")
); 

CREATE TABLE IF NOT EXISTS "eat_with"(
    "dish_id" INT NOT NULL REFERENCES "dish"("id"), 
    "wine_id" INT NOT NULL REFERENCES "wine"("id"), 
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    PRIMARY KEY ("dish_id", "wine_id")
); 

CREATE TABLE IF NOT EXISTS "cultivate"(
    "culture_id" INT NOT NULL REFERENCES "culture"("id"), 
    "wine_id" INT NOT NULL REFERENCES "wine"("id"), 
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    PRIMARY KEY ("culture_id", "wine_id")
); 

CREATE TABLE IF NOT EXISTS "order"(
    "quantity" INT NULL, 
    "user_id" INT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE, 
    "wine_id" INT NOT NULL REFERENCES "wine"("id") ON DELETE CASCADE, 
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    PRIMARY KEY ("user_id", "wine_id")
); 


COMMIT;