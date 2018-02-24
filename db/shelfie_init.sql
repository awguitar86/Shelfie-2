DROP TABLE IF EXISTS bins;

CREATE TABLE bins (
    id SERIAL PRIMARY KEY,
    shelf TEXT,
    name TEXT,
    price INT,
    img_url TEXT
);

INSERT INTO bins (shelf, name, price, img_url)
VALUES
    ('shelfA', 'stuff', 300, 'test@test.com'),
    ('shelfB', 'stuff', 300, 'test@test.com'),
    ('shelfC', 'stuff', 300, 'test@test.com'),
    ('shelfD', 'stuff', 300, 'test@test.com')
;