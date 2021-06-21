const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

const bookSeed = 
    {
        title: "The Count of Monte Cristo",
        authors: ["Alexandre Dumas"],
        description: "Edmond Dantès is a young man about to be made captain of a cargo vessel and marry his sweetheart. But he is arrested at his pre-wedding feast, having been falsely accused of being a Bonapartist. Thrown into the notorious Château d’If prison, he eventually meets an ancient inmate who teaches him language, science, and passes hints of a hidden fortune. When Edmond makes his way out of prison, he plots to reward those who stood by him (his old employer, for one), and to seek revenge on the men who betrayed him: one who wrote the letter that denounced him, one that married his fiancée in his absence, and one who knew Dantès was innocent but stood idly by and did nothing.",
        img: "http://books.google.com/books/content?id=3M4cEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=3M4cEAAAQBAJ&dq=title:The+Count+of+Monte+Cristo&hl=&source=gbs_api"
    }

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    });