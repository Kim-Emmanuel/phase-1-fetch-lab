function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
//  .then((resp) => resp.json())
//  .then((json) => console.log(json));
    .then(function(resp) {
      console.log(resp);
      return resp.json();
    })
    .then(function(data) {
      console.log(data);
    });
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function(books) {
  fetchBooks();
});
