const { addNewBookHandler } = require("./handlers/postNewBookHandler");


const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addNewBookHandler,
    },
];

module.exports = routes;