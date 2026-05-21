// 1.Könyv osztály
class Book {
    id: string;
    title: string;
    author: string;
    price: number;

    constructor(id: string, title: string, author: string, price: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
    }
}


// 2. Könyvtár osztály
class Library {
    books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(id: string): void {
        this.books = this.books.filter(book => book.id !== id);
    }

    findBookById(id: string): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    listAllBooks(): void {
        this.books.forEach(book => {
            console.log(`${book.title} - ${book.author} (${book.price} Ft)`);
        });
    }
}


// 3. Felhasználó Osztály
class User {
    userId: string;
    name: string;
    email: string;

    constructor(userId: string, name: string, email: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }

    borrowBook(library: Library, bookId: string): void {
        const book = library.findBookById(bookId);

        if (book) {
            console.log(`${this.name} kikölcsönözte: ${book.title}`);
            library.removeBook(bookId);
        } else {
            console.log("A könyv nem található.");
        }
    }
}


// 🔹 Tesztelés
const library = new Library();

const book1 = new Book("1", "A Gyűrűk Ura", "J.R.R. Tolkien", 5000);
const book2 = new Book("2", "1984", "George Orwell", 3000);

library.addBook(book1);
library.addBook(book2);

console.log("Könyvek a könyvtárban:");
library.listAllBooks();

const user = new User("u1", "Dávid", "david@email.com");

user.borrowBook(library, "1");

console.log("Könyvek kölcsönzés után:");
library.listAllBooks();