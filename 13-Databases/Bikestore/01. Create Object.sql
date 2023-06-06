CREATE TABLE Authors (
    AuthorID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
);
GO

CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title VARCHAR(50) NOT NULL,
    AuthorID INT NOT NULL,
    FOREIGN KEY (AuthorID) REFERENCES Authors (AuthorID)
);
GO

INSERT INTO Bookstore.dbo.Authors (AuthorID, FirstName, LastName) VALUES (1,'John','Doe'), (2,'Jane','Smith'), (3, 'David', 'Johnson');
GO

INSERT INTO Bookstore.dbo.Books (BookID, Title, AuthorID) VALUES (1, 'Book1', 1), (2, 'Book2', 2), (3, 'Book3', 3);
GO