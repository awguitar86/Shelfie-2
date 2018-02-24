DROP TABLE IF EXISTS bins;

CREATE TABLE bins (
    id PRIMARY SERIAL KEY,
    shelf TEXT,
    name TEXT,
    price TEXT
)

INSERT INTO bins (name, price)
VALUES
    ('shelfA', 'stuff', 300),
    ('shelfB', 'stuff', 300),
    ('shelfC', 'stuff', 300),
    ('shelfD', 'stuff', 300)
;