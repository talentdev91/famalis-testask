const authors = [
  {
    id: 1,
    name: "John Ronald Reuel Tolkien",
  },
  {
    id: 2,
    name: "George Raymond Richard Martin",
  },
  {
    id: 3,
    name: "Joanne Rowling",
  },
];
module.exports = {
  getAuthorsFromDatabase: (authorId) => {
    return new Promise((ok, fail) => {
      if (authorId) {
        const parsedAuthorId = parseInt(authorId);
        if (isNaN(parsedAuthorId)) {
          return fail("Author id must be a number");
        }
        const author = authors.find((b) => b.id === parsedAuthorId);
        return ok(author);
      }
      ok(authors);
    });
  },
};

