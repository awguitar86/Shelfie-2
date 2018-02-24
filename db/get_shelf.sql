SELECT * FROM bins
    WHERE shelf = $1
    ORDER BY id
;