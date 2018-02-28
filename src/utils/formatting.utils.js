function coerceNumbers(price) {
    return price
        .split('')
        .filter( char => {
            if(!isNaN(Number(char)) || char === '.'){
                return char;
            }
        })
        .join('');
}

function coerceCents(price) {
    price = price.split('');
    const idx = price.findIndex( char => char === '.');

    if (idx === -1) {
        price.push('.', '0', '0');
        return price.join('');
    } else {
        price.splice(idx + 3, price.length);
        return price.join('');
    }
}

function coerceDollar(price) {
    price = price.split('');

    if( price[0] === '.') {
        price.unshift('0');
        return price.join('');
    } else {
        return price.join('');
    }
}

function coerceCommas(price) {
    price = price.split('');
    const idx = price.findIndex( char => char === '.');

    for( var i = idx - 3; i > 0; i -= 3) {
        price.splice(i, 0, ',');
    }

    return price.join('');
}

function formatPriceForDB(price) {
    price = coerceNumbers(price);
    price = coerceCents(price);
    price = coerceDollar(price);
    return Number(price);
}

function formatPriceForDisplay(price) {
    price = price.toString();
    return coerceCommas(price);
}

export {
    formatPriceForDB,
    formatPriceForDisplay,
}