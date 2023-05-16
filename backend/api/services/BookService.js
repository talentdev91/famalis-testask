module.exports = {
  getBooks: async () => {
    const books = await Book.getBooksFromDatabase();
    return books;
  },

  getBook: async (bookId) => {
    const books = await Book.getBooksFromDatabase(bookId);
    return books;
  },

  getAuthorName: async (authorId) => {
    const authorName = await Author.getAuthorsFromDatabase(authorId);
    return authorName;
  },
};
