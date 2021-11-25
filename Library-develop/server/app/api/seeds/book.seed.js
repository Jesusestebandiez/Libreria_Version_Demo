const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Book = require('../models/book');


const books = [
    {
        "title": " La nena ",
        "author": " Carmen Mola ", 
        "editorial": " Alfaguara ",
        "genre": " Policiaca ", 
        "year": " 2020 "
    }, 
    {
        "title": " El alma de las piedras ", 
        "author": " Paloma Sanchez Garnica ", 
        "editorial": " Planeta ", 
        "genre": " Novela histórica ",  
        "year": " 2009 " 
    }, 
    {
        "title": " Antes de diciembre ", 
        "author": " Joana Marcus ", 
        "editorial": " Montena ", 
        "genre": " Juvenil Romántica ", 
        "year": " 2019 "  
    }, 
    {
        "title": " Sira ", 
        "author": " Maria Dueñas ", 
        "editorial": " Planeta ", 
        "genre": " Drama Histórico ", 
        "year": " 2021 "  
    }, 
    {
        "title": " El italiano ", 
        "author": " Arturo Pérez-Reverte ", 
        "editorial": " Alfaguara ", 
        "genre": " Novela Histórica ", 
        "year": " 2021 "
    }
];


mongoose
  .connect("mongodb+srv://Library:Library@cluster0.exk5r.mongodb.net/Library?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		
    const allBooks = await Book.find();
		
    if (allBooks.length) {
      await Book.collection.drop(); 
      console.log('Drop database')
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		
		await Book.insertMany(books);
        console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	
  .finally(() => mongoose.disconnect());