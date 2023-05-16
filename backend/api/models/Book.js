const books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    publicationYear: 1997,
    author: 3,
    description:
      "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school and with the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
  },
  {
    id: 2,
    title: "The Fellowship of the Ring",
    publicationYear: 1954,
    author: 1,
    description:
      "The Fellowship of the Ring is the first of three volumes of the epic novel[2] The Lord of the Rings by the English author J. R. R. Tolkien. It is followed by The Two Towers and The Return of the King. The action takes place in the fictional universe of Middle-earth. The book was first published on 29 July 1954 in the United Kingdom.",
  },
  {
    id: 3,
    title: "A Game of Thrones",
    publicationYear: 1996,
    author: 2,
    description:
      "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin. It was first published on August 1, 1996. The novel won the 1997 Locus Award[2] and was nominated for both the 1997 Nebula Award[2] and the 1997 World Fantasy Award.[3] The novella Blood of the Dragon, comprising the Daenerys Targaryen chapters from the novel, won the 1997 Hugo Award for Best Novella. In January 2011, the novel became a New York Times Bestseller[4] and reached No. 1 on the list in July 2011.",
  },
];

module.exports = {
  getBooksFromDatabase: (bookId) => {
    return new Promise((ok, fail) => {
      if (bookId) {
        const parsedBookId = parseInt(bookId);
        if (isNaN(parsedBookId)) {
          return fail("Book id must be a number");
        }
        console.log("parsedBookId", parsedBookId, typeof parsedBookId);
        const book = books.find((b) => b.id === parsedBookId);
        return ok(book);
      }
      ok(books);
    });
  },
};

