//Create a Book Class to contain All The Book info!!

class Book {
  constructor(title, author, isbn) {
    this.title = title,
    this.author = author,
    this.isbn = isbn
  }
}

//Store Books to localStorage 
class Store{
  
}

//Create a UI class for DOM Manipulation
class UI{
  static displayBooks(){ 
    const storedBooks = [
      {
        title: 'Book One',
        author: 'John Doe',
        isbn: 203029102030
      },
      {
        title: 'Book Two',
        author: 'Jane Doe',
        isbn: 290304949994
      }
    ]
  
    const books = storedBooks;
    
    
    books.forEach((book) => {
      UI.addBookToDom(book)
    })
    
  }
  
  static addBookToDom(book) {
    
    const row = document.createElement('div');
    
    row.className = 'storedBookInfo';
    
    row.innerHTML = `
      <div class="info">
      <label for="infotitle" id="firstLabel">Title</label>
      <input type="text" readonly name="" id="infotitle" value="${book.title}" />
    </div>
    <div class="info">
      <label for="infoauthor" id="secondLabel">Author</label>
      <input type="text" readonly name="" id="infoauthor" value="${book.author}" />
    </div>
    <div class="info">
      <label for="infoisbn" id="thirdLabel">ISBN#</label>
      <input type="text" readonly="readonly" name="" id="infoisbn" value="${book.isbn}" />
    </div>
    <button class="deleteBtn" id="delBtn">Delete</button>
    `;
    
    document.querySelector('#container').appendChild(row)
   
  }
  
  static clearFields(title, author, isbn) {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
    
  }
  
  static deleteBook(el) {
    el.parentElement.remove()
  }
}

document.addEventListener('DOMcontentLoaded', UI.displayBooks())



document.querySelector('#bookForm').addEventListener('submit', (e)=> {
  e.preventDefault();
   
   let title = document.querySelector('#title').value;
   let author = document.querySelector('#author').value;
   let isbn = document.querySelector('#isbn').value;
   
  const book = new Book(title, author, isbn);
  
  if (title === '' || author === '' || isbn === '') {
    alert('Pls fill all fields')
  } else {
    UI.addBookToDom(book); 
  }
  
  UI.clearFields(title, author, isbn)
})

const buttons = document.querySelectorAll('#delBtn');

buttons.forEach((button) => {
  button.onclick = () => {
    button.parentElement.remove()
  }
})


