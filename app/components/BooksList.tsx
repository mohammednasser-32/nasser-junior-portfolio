export type Book = {
  cover: string;
  title: string;
  language: string;
  orderLink: string | null;
};

type BooksListProps = {
  books: Book[];
};

export function BooksList({ books }: BooksListProps) {
  return (
    <ul className="books-list">
      {books.map((book) => (
        <li key={`${book.title}-${book.language}`} className="book-item">
          <div className="book-cover">
            <img src={book.cover} alt={book.title} loading="lazy" />
          </div>

          <div className="book-details">
            <div className="book-title">
              {book.title}
            </div>
            <div className="book-language">
              {book.language}
            </div>
          </div>

          <div className="book-order">
            {book.orderLink ? (
              <a
                href={book.orderLink}
                className="book-order-button"
                target="_blank"
                rel="noreferrer"
              >
                Order
              </a>
            ) : (
              <span className="book-order-unavailable">
                currently not available
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
