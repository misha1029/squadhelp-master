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

