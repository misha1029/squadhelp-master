CREATE TABLE Conversation
(
    id           serial PRIMARY KEY                                NOT NULL,
    participants integer                                           NOT NULL,
    userId       integer REFERENCES "Users" (id) ON DELETE CASCADE NOT NULL,
    createdAt    timestamp default now()                           NOT NULL,
    updatedAt    timestamp default now()                           NOT NULL
);

CREATE TABLE Message
(
    id           serial PRIMARY KEY                                     NOT NULL,
    body         varchar(10)                                            NOT NULL,
    sender       integer REFERENCES "Users" (id) ON DELETE CASCADE      NOT NULL,
    conversation integer REFERENCES Conversation (id) ON DELETE CASCADE NOT NULL,
    createdAt    timestamp default now()                                NOT NULL,
    updatedAt    timestamp default now()                                NOT NULL
);

CREATE TABLE favoriteList
(
    id             serial PRIMARY KEY                                     NOT NULL,
    name           varchar(10)                                            NOT NULL,
    conversationId integer                                                NOT NULL,
    catalogId      integer REFERENCES Conversation (id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE blackList
(
    id             serial PRIMARY KEY                                     NOT NULL,
    name           varchar(10)                                            NOT NULL,
    conversationId integer                                                NOT NULL,
    catalogId      integer REFERENCES Conversation (id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE Conversation_Users
(
    conversationId integer REFERENCES Conversation (id) ON DELETE CASCADE NOT NULL,
    userId         integer REFERENCES "Users" (id) ON DELETE CASCADE      NOT NULL,
    PRIMARY KEY (conversationId, userId)
);
CREATE TABLE Catalog
(
    id          serial PRIMARY KEY                                NOT NULL,
    catalogName varchar(10)                                       NOT NULL,
    userId      integer REFERENCES "Users" (id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE Catalog_Conversation
(
    catalogId      integer REFERENCES Catalog (id) ON DELETE CASCADE      NOT NULL,
    conversationId integer REFERENCES Conversation (id) ON DELETE CASCADE NOT NULL,
    PRIMARY KEY (catalogId, conversationId)
);

/*==========================================1=============================================*/

ALTER TYPE "enum_Users_role" ADD VALUE 'admin';

INSERT INTO "Users" ("firstName", "lastName", "displayName", password, email, role)
VALUES ('Vasy', 'Vasyov', 'Vasyov', '123456', 'Vasyov@gmail.com', 'admin'),
       ('Bill', 'Billov', 'Bill', '123456', 'Bill@gmail.com', 'admin');

SELECT role, COUNT(*)
FROM "Users"
WHERE role = 'admin'
   OR role = 'customer'
GROUP BY role;

/*==========================================2=============================================*/

CREATE TABLE Purchase
(
    id    serial PRIMARY KEY NOT NULL,
    pName varchar(255)       NOT NULL,
    data  date               NOT NULL,
    cost  integer            NOT NULL
);

INSERT INTO Purchase(pName, data, cost)
VALUES ('New Year`s Goods 1', '2019-12-27', '50'),
       ('New Year`s Goods 2', '2019-12-10', '100'),
       ('New Year`s Goods 3', '2019-12-29', '50'),
       ('New Year`s Goods 4', '2020-01-02', '100'),
       ('New Year`s Goods 4', '2020-01-15', '100');

CREATE TABLE Purchase_Users
(
    userId     integer REFERENCES "Users" (id) ON DELETE CASCADE  NOT NULL,
    purchaseId integer REFERENCES Purchase (id) ON DELETE CASCADE NOT NULL,
    PRIMARY KEY (userId, purchaseId)
);
INSERT INTO Purchase_Users (userId, purchaseId)
VALUES (44, 1),
       (45, 5),
       (48, 2),
       (49, 4),
       (46, 3);

INSERT INTO "Users" ("firstName", "lastName", "displayName", password, email, role, balance)
VALUES ('Test1', 'Testovich1', 'Test1', '123456', 'Test1@gmail.com', 'customer', 500),
       ('Test2', 'Testovich2', 'Test3', '123456', 'Test2@gmail.com', 'customer', 1000),
       ('Test3', 'Testovich3', 'Test3', '123456', 'Test3@gmail.com', 'customer', 20000);


UPDATE "Users"
SET balance=balance + cost * 0.1 FROM Purchase INNER JOIN Purchase_Users PU on Purchase.id = PU.purchaseId
WHERE  "Users".id IN (SELECT "Users".id
             FROM "Users"
                      INNER JOIN Purchase_Users ON "Users".id = Purchase_Users.userId
                      LEFT JOIN Purchase ON Purchase.id = Purchase_Users.purchaseId
             WHERE "Users".role = 'customer'
               AND data BETWEEN '2019-12-25' AND '2020-01-14');

/*==========================================3=============================================*/

INSERT INTO "Users" ("firstName", "lastName", "displayName", password, email, role, balance, rating)
VALUES ('Test100', 'Testovich100', 'Test1', '123456', 'Test100@gmail.com', 'creator', 100, 3),
       ('Test101', 'Testovich101', 'Test101', '123456', 'Test101@gmail.com', 'creator', 100, 5),
       ('Test102', 'Testovich102', 'Test102', '123456', 'Test102@gmail.com', 'creator', 100, 4),
       ('Test103', 'Testovich103', 'Test103', '123456', 'Test103@gmail.com', 'creator', 100, 5),
       ('Test104', 'Testovich104', 'Test104', '123456', 'Test104@gmail.com', 'creator', 100, 6),
       ('Test105', 'Testovich105', 'Test105', '123456', 'Test105@gmail.com', 'creator', 100, 7);

UPDATE "Users"
SET balance = balance + 10
WHERE id in (SELECT id
             FROM "Users"
             WHERE role = 'creator'
             ORDER BY rating DESC
             limit 3);