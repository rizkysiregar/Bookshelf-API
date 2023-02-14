const { deleteBookById } = require("./handlers/deleteBookHandler");
const { getAllBooksHandler, getBookById } = require("./handlers/getBookHandler");
const { addNewBookHandler } = require("./handlers/postNewBookHandler");
const { updateBookByIdHandler } = require("./handlers/updateBookHandler");


const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addNewBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookById,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: updateBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookById,
    },
];

module.exports = routes;