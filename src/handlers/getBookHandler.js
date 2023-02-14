const {books} = require("../books")


const getAllBooksHandler = () => ({
    status: 'success',
    data: {
        books: books.map((b) => ({
            id: b.id,
            name: b.name,
            publisher: b.publisher,
        })),
    },
});

const getBookById = (request, h) => {
    // get id from params 
    const { id } = request.params;

    // filter
    const book = books.filter((n) => n.id === id)[0];

    if(book !== undefined){
        return {
            status: 'success',
            data: {
                book,
            },
        };
    }


    // if fail / buku === undefined
    const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
    });
    response.code(404);
    return response;

};

module.exports = {getAllBooksHandler, getBookById};