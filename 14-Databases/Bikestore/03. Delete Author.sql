DELETE FROM Books
WHERE AuthorID IN (
    SELECT AuthorID
    FROM Authors
    WHERE AuthorID = 3
);

DELETE FROM Authors
WHERE AuthorID = 3;

GO

SELECT * FROM Books;
GO

SELECT * FROM Authors;
GO