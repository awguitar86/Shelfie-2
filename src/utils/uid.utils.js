function uIdGenerator() {
    let id = 1;
    return function iIdInc() {
        return id ++;
    }
}

const getUId = uIdGenerator();

export default getUId;