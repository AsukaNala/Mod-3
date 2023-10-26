  /*
  a) Write a function getBookTitle(bookId) that uses the find function to return the
  title of the book object with the matching id.
  b) Write a function getOldBooks() that uses the filter function to return all book
  objects written before 1950.
  c) Write a function addGenre() that uses the map function to add a new genre property
  to all of the above books, with the value ‘classic’.
  d) (Extension) Write a function getTitles(authorInitial) that uses map and
  filter together to return an array of book titles for books written by authors whose
  names start with authorInitial.
  e) (Extension) Write a function latestBook() that uses find and forEach to get the
  book with the most recent publication date.*/

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

function getBookTitle(bookId){
  let matchingBook = books.find((book) =>book.id === bookId);
  return matchingBook.title;
}    
//console.log(getBookTitle(4));

    
const getOldBooks = books.filter(item => item.year <1950);//(b)

/*function getOldBooks() {
  let filteredBooks = books.filter(book =>book.year < 1950);
  let titles = filteredBooks.map(book =>book.title);
  return titles;
} // Makin an array for titles.*/
//console.log(getOldBooks());

const addGenre = books.map(item =>({...item, genre:'Classic'}));//(c)
//console.log(addGenre);

function getTitles(authorInitial){
   let filtered= books.filter(book => book.author.charAt(0).toLowerCase() == authorInitial.toLowerCase());
   return filtered.map(items =>items.title);
}//(d)

/* function getTitles(authorInitial){
  retun books.filter(book =>book.author.toLowerCase().startWith(authorInitial.toLowerCase()))
}.map(book=>book.title);*/

//console.log(getTitles('j'));

function latestBook() {
  let latestYear = 1900; // set the roughly old year
  books.forEach(book =>{
    if(book.year > latestYear){
      latestYear = book.year
    } //loops over each book then if the year is older than latest Year, it sets the value's year as the latest yeaer
  });
  return books.find(book =>book.year == latestYear);//find the latest yeaer
}

console.log(latestBook())
