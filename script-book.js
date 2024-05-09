let books = [
    { title: "Deep Work", author: "Cal Newport" },
    { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey" },
    { title: "The Lean Startup", author: "Eric Ries" },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt and David Thomas" },
    { title: "The Phoenix Project", author: "Gene Kim and Joe Laughlin" },
    { title: "The Mythical Man-Month", author: "Frederick P. Brooks" },
    { title: "Clean Code", author: "Robert C. Martin" },
  ];
  
  document.addEventListener("DOMContentLoaded",function (){
    // console.log("Hello")
        setBooks(books);
  });
  
    function setBooks(books){
        let booklist = document.getElementById("book-list");
        booklist.innerHTML ="";

        books.forEach(function (book){
            let li = document.createElement("li");
            li.innerHTML = book.title + " by " + book.author
        //    console.log(book.author); 
        booklist.appendChild(li)
        });
    }

    function searchBooks() {
        let searchInput = document.getElementById("search");
        let searchValue = searchInput.value.toLowerCase();

        let searchResults = [];

        books.forEach(function (book) {
        if (book.author.toLowerCase().includes(searchValue) || book.title.toLowerCase().includes(searchValue)) {
            console.log("Isi parameter 'book':", book);
            searchResults.push(book);
        }
        });
        console.log("Isi dari searchResults:", searchResults);
        setBooks(searchResults);
        // books.forEach(function (book)
        // {
        //     if (book.author.toLowerCase().includes(searchValue) || book.title.toLowerCase().includes(searchValue))
        //     {
        //         if (book.author.toLowerCase().includes(searchValue)){
        //             let searchResultsAuthor = books.filter(function (book){
        //                 return book.author.toLowerCase().includes(searchValue);
        //             });
        //             setBooks(searchResultsAuthor); 
        //         }else {
        //             let searchResultsTitle = books.filter(function (book){
        //                 return book.title.toLowerCase().includes(searchValue);
        //             });
        //             setBooks(searchResultsTitle); 

        //         }
        //     }
        // }
        // )
        
        
        
        
    }


    // function searchBooks() {
    //     // Pertama. Mengambil input pencarian
    //     let searchInput = document.getElementById("search"); 
    //     let searchValue = searchInput.value.toLowerCase(); 
    //     // Input: DEEP
    //     // Konversi dengan toLowerCase(): deep
      
    //     // Kedua. Lakukan filtering buku berdasarkan pencarian
    //     let bookFiltered = books.filter(function (book) {
    //       // Dari data: Deep
    //       // Konversi dengan toLowerCase(): deep
      
    //       // DEEP = deep => False
    //       // DeEp = deep => False
    //       // deep = deep => True
      
    //       // clean == clean => True
      
    //       return book.title.toLowerCase().includes(searchValue);
    //     });
      
    //     setBooks(bookFiltered);
    //                                                                                                                     // for loop version
    //                                                                                                                     //   let booksFiltered = [];
                                                                                                                    
    //                                                                                                                     //   for (let i = 0; i < books.length; i++) {
    //                                                                                                                     //     if (books[i].title.toLowerCase().includes(searchValue)) {
    //                                                                                                                     //       booksFiltered.push(books[i]);
    //                                                                                                                     //     }
    //                                                                                                                     //   }
                                                                                                                    
    //                                                                                                                     // Ketiga. Menampilkan hasil pencarian di dalam ul
    //   }