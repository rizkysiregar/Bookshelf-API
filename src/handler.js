const { nanoid } = require("nanoid");
const books = require("./books"); 

const addBookHandler = (request, h) => {
    const {name, year, author, summary, publisher, pageCount, readPage, reading} = request.payload;

    // generate id, insertAt, updateAt
    const id = nanoid(16); // uniqe with 16 long characther
    const finished = false;
    const insertAt = new Date().toISOString();
    const updateAt = insertAt;

    const newBook = {
        name, year, author, summary, publisher, pageCount, readPage, reading, id, finished, insertAt, updateAt,
    };

    books.push(newBook);

    // check if success 
    const isSuccess = books.filter((book) => book.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
          status: 'success',
          message: 'Buku berhasil ditambahkan',
          data: {
            bookId: id,
          },
        });
        response.code(201);
        response.header('Access-Control-Allow-Origin', '*');
        return response;
      }
      const response = h.response({
        status: 'fail',
        message: 'Buku gagal ditambahkan',
      });
      response.code(500);
      response.header('Access-Control-Allow-Origin', '*');
      return response;
};



module.exports = {addBookHandler}