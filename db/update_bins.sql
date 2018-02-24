UPDATE bins SET
    shelf = $2,
    name = $3,
    price = $4,
    img_url = $5
    WHERE id = $1;
