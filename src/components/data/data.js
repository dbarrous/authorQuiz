//Author Quiz Data

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
      "Harry Potter: Chamber of Secrets"
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
    id: 14,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/F_Scott_Fitzgerald_1921.jpg/440px-F_Scott_Fitzgerald_1921.jpg",
    author: "F. Scott Fitzgerald",
    books: ["The Great Gatsby"]
  },
  15: {
    id: 15,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/440px-Shakespeare.jpg",
    author: "William Shakespeare",
    books: ["Hamlet", "Macbeth", "Midsummer Night's Dream"]
  },
  16: {
    id: 16,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/CassandraAusten-JaneAusten%28c.1810%29_hires.jpg/400px-CassandraAusten-JaneAusten%28c.1810%29_hires.jpg",
    author: "Jane Austen",
    books: ["Sense and Sensibility", "Pride and Prejudice", "Emma"]
  },
  17: {
    id: 17,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg/440px-George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg",
    author: "Virginia Woolf",
    books: ["Mrs Dalloway", "To the Lighthouse"]
  },
  18: {
    id: 18,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/440px-George_Orwell_press_photo.jpg",
    author: "George Orwell",
    books: ["Animal Farm", "1984"]
  },
  19: {
    id: 19,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Vladimir_Nabokov_1973.jpg/440px-Vladimir_Nabokov_1973.jpg",
    author: "Vladimir Nabokov",
    books: ["Lolita", "Ada"]
  },
  20: {
    id: 20,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/John_Steinbeck_1962.jpg",
    author: "John Steinback",
    books: ["Of Mice and Men", "The Grapes of Wrath"]
  },
  21: {
    id: 21,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Angelou_at_Clinton_inauguration_%28cropped_2%29.jpg/440px-Angelou_at_Clinton_inauguration_%28cropped_2%29.jpg",
    author: "Maya Angelou",
    books: ["I Know Why the Caged Bird Sings"]
  },
  22: {
    id: 22,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Edgar_Allan_Poe%2C_circa_1849%2C_restored%2C_squared_off.jpg/400px-Edgar_Allan_Poe%2C_circa_1849%2C_restored%2C_squared_off.jpg",
    author: "Edgar Allan Poe",
    books: ["The Tell-Tale Heart", "The Raven"]
  },
  23: {
    id: 23,
    authorImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ted_Geisel_NYWTS_2_crop.jpg/440px-Ted_Geisel_NYWTS_2_crop.jpg",
    author: "Dr.Seuss",
    books: ["The Cat in the Hat", "Green Eggs and Ham"]
  }
};

export default data;
