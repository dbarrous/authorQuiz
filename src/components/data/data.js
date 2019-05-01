//Author Quiz Sample Data Scehma
/*
{
  author: "author1",
  books: ["book1", "book2","book3"]
},
{
  author: "author2",
  books: ["book1", "book2","book3"]
},
{
  author: "author3",
  books: ["book1", "book2","book3"]
}
*/

const data = {
  0: {
    id: 0,
    authorImg: "https://images.gr-assets.com/authors/1362814142p8/3389.jpg",
    author: "Stephen King",
    books: ["It", "The Shining"]
  },
  1: {
    id: 1,
    authorImg:
      "https://i.pinimg.com/474x/16/9f/29/169f2980a9ccd6c22e5a5247e79e8ffa--dominican-republic-short-stories.jpg",
    author: "Julia Alvarez",
    books: [
      "In The Time of the Butterflies",
      "How the Garcia Girls lost their accents"
    ]
  },
  2: {
    id: 2,
    authorImg:
      "https://specials-images.forbesimg.com/imageserve/5b43b8574bbe6f1becf1c11f/416x416.jpg?background=000000&cropX1=525&cropX2=2275&cropY1=80&cropY2=1830",
    author: "J.K. Rowling",
    books: [
      "Harry Potter: Sorcerer's Stone",
      "Harry Potter: Deathly Hollows",
      "Harry Potter: Chamber of Secrets",
      "Harry Potter: Prisoner of Askaban",
      "Harry Potter: Order of the Phoenix",
      "Harry Potter: Half-Blood Prince"
    ]
  },
  3: {
    id: 3,
    authorImg:
      "https://m.media-amazon.com/images/M/MV5BZWE2MzM2MTItYzE3Ny00OTIyLTk4ODMtOWY2NmFjM2FkY2ZkXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_.jpg",
    author: "Miguel De Cervantes",
    books: ["Don Quixote"]
  },
  4: {
    id: 4,
    authorImg:
      "https://www.thetimes.co.uk/imageserver/image/methode%2Fsundaytimes%2Fprodmigration%2Fweb%2Fbin%2Fe3543cff-6ffc-4194-b594-6a2e7cde3b9a.jpg?crop=1024%2C683%2C0%2C0&resize=1200",
    author: "Jonathan Swift",
    books: ["Gulliver's Travels", "A Modest Proposal"]
  },
  5: {
    id: 5,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nathaniel_Hawthorne_by_Brady%2C_1860-64.jpg/220px-Nathaniel_Hawthorne_by_Brady%2C_1860-64.jpg",
    author: "Nathaniel Hawthorne",
    books: ["The Scarlet Letter", "The House of Seven Gables", "John Goodman"]
  },
  6: {
    id: 6,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Herman_Melville_by_Joseph_O_Eaton.jpg/220px-Herman_Melville_by_Joseph_O_Eaton.jpg",
    author: "Herman Melville",
    books: ["Moby-Dick"]
  },
  7: {
    id: 7,
    authorImg:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU0OTE1Mjg2NTQz/lewis-carroll-9239598-1-402.jpg",
    author: "Lewis Carroll",
    books: ["Alice's Adventures In Wonderland"]
  },
  8: {
    id: 8,
    authorImg:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NDg0MDU1MTUzNTA5OTAz/mark-twain-9512564-1-402.jpg",
    author: "Mark Twain",
    books: ["Huckleberry Finn", "The Adventures of Tom Sawyer"]
  },
  9: {
    id: 9,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/HarperLee_2007Nov05.jpg",
    author: "Harper Lee",
    books: ["To Kill A Mockingbird", "Go Set a Watchman"]
  },
  10: {
    id: 10,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Suzanne_Collins_David_Shankbone_2010.jpg/440px-Suzanne_Collins_David_Shankbone_2010.jpg",
    author: "Suzanne Collins",
    books: ["The Hunger Games Trilogy"]
  },
  11: {
    id: 11,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Murakami_Haruki_%282009%29.jpg/440px-Murakami_Haruki_%282009%29.jpg",
    author: "Haruki Murakami",
    books: ["The Wind-Up Bird Chronicle", "Kafka on the Shore"]
  },
  12: {
    id: 12,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/440px-ErnestHemingway.jpg",
    author: "Ernest Hemingway",
    books: ["The Old Man and the Sea", "A Farewell to Arms"]
  },
  13: {
    id: 13,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/400px-Dickens_Gurney_head.jpg",
    author: "Charles Dickens",
    books: ["Oliver Twist", "David Copperfield", "A Tale of Two Cities"]
  },
  14: {
    id: 2,
    authorImg:
      "https://specials-images.forbesimg.com/imageserve/5b43b8574bbe6f1becf1c11f/416x416.jpg?background=000000&cropX1=525&cropX2=2275&cropY1=80&cropY2=1830",
    author: "J.K. Rowling",
    books: [
      "Harry Potter: Sorcerer's Stone",
      "Harry Potter: Deathly Hollows",
      "Harry Potter: Chamber of Secrets",
      "Harry Potter: Prisoner of Askaban",
      "Harry Potter: Order of the Phoenix",
      "Harry Potter: Half-Blood Prince"
    ]
  },
  2: {
    id: 2,
    authorImg:
      "https://specials-images.forbesimg.com/imageserve/5b43b8574bbe6f1becf1c11f/416x416.jpg?background=000000&cropX1=525&cropX2=2275&cropY1=80&cropY2=1830",
    author: "J.K. Rowling",
    books: [
      "Harry Potter: Sorcerer's Stone",
      "Harry Potter: Deathly Hollows",
      "Harry Potter: Chamber of Secrets",
      "Harry Potter: Prisoner of Askaban",
      "Harry Potter: Order of the Phoenix",
      "Harry Potter: Half-Blood Prince"
    ]
  },
  2: {
    id: 2,
    authorImg:
      "https://specials-images.forbesimg.com/imageserve/5b43b8574bbe6f1becf1c11f/416x416.jpg?background=000000&cropX1=525&cropX2=2275&cropY1=80&cropY2=1830",
    author: "J.K. Rowling",
    books: [
      "Harry Potter: Sorcerer's Stone",
      "Harry Potter: Deathly Hollows",
      "Harry Potter: Chamber of Secrets",
      "Harry Potter: Prisoner of Askaban",
      "Harry Potter: Order of the Phoenix",
      "Harry Potter: Half-Blood Prince"
    ]
  },
  2: {
    id: 2,
    authorImg:
      "https://specials-images.forbesimg.com/imageserve/5b43b8574bbe6f1becf1c11f/416x416.jpg?background=000000&cropX1=525&cropX2=2275&cropY1=80&cropY2=1830",
    author: "J.K. Rowling",
    books: [
      "Harry Potter: Sorcerer's Stone",
      "Harry Potter: Deathly Hollows",
      "Harry Potter: Chamber of Secrets",
      "Harry Potter: Prisoner of Askaban",
      "Harry Potter: Order of the Phoenix",
      "Harry Potter: Half-Blood Prince"
    ]
  },
  2: {
    id: 2,
    authorImg:
      "https://specials-images.forbesimg.com/imageserve/5b43b8574bbe6f1becf1c11f/416x416.jpg?background=000000&cropX1=525&cropX2=2275&cropY1=80&cropY2=1830",
    author: "J.K. Rowling",
    books: [
      "Harry Potter: Sorcerer's Stone",
      "Harry Potter: Deathly Hollows",
      "Harry Potter: Chamber of Secrets",
      "Harry Potter: Prisoner of Askaban",
      "Harry Potter: Order of the Phoenix",
      "Harry Potter: Half-Blood Prince"
    ]
  },
  2: {
    id: 2,
    authorImg:
      "https://specials-images.forbesimg.com/imageserve/5b43b8574bbe6f1becf1c11f/416x416.jpg?background=000000&cropX1=525&cropX2=2275&cropY1=80&cropY2=1830",
    author: "J.K. Rowling",
    books: [
      "Harry Potter: Sorcerer's Stone",
      "Harry Potter: Deathly Hollows",
      "Harry Potter: Chamber of Secrets",
      "Harry Potter: Prisoner of Askaban",
      "Harry Potter: Order of the Phoenix",
      "Harry Potter: Half-Blood Prince"
    ]
  }
};

export default data;
