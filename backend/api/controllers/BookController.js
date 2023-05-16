module.exports = {
  // getBooks: (req, res) => {
  //   BookService.getBooks().then(
  //     (books) => {
  //       res.ok(books);
  //     },
  //     (error) => {
  //       res.serverError(error);
  //     }
  //   );
  // },
  getBooks: async (req, res) => {
    try {
      const books = await BookService.getBooks();
      res.ok(books);
    } catch (error) {
      res.serverError(error);
    }
  },
  // getBook: (req, res) => {
  //   const bookId = req.param("id");
  //   BookService.getBook(bookId).then(
  //     (books) => {
  //       res.ok(books);
  //     },
  //     (error) => {
  //       res.serverError(error);
  //     }
  //   );
  // },
  getBook: async (req, res) => {
    try {
      const bookId = req.param("id");
      const book = await BookService.getBook(bookId);
      if (!book) {
        res.notFound("Book not found");
      } else {
        res.ok(book);
      }
    } catch (error) {
      res.serverError(error);
    }
  },

  getAuthorName: async (req, res) => {
    try {
      const authorId = req.body.id;
      const authorName = await BookService.getAuthorName(authorId);
      if (!authorName) {
        res.notFound("Author not found");
      } else {
        res.ok(authorName);
      }
    } catch (error) {
      res.serverError(error);
    }
  },
};
