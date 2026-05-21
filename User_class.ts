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