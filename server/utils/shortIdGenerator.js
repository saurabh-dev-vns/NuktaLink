const ShortUniqueId = require('short-unique-id');

const { randomUUID } = new ShortUniqueId({ length: 6 });

const generateShortCode = () =>{
    return randomUUID();
}

module.exports = generateShortCode;