UPDATE Bins SET
    shelf = $2,
    name = $3,
    price = $4
    WHERE id = $1
;
