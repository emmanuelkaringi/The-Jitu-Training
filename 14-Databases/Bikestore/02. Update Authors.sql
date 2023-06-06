UPDATE Authors SET LastName = 'Smithson' WHERE AuthorID = ( SELECT AuthorID FROM Books WHERE Title = 'Book1');
GO

SELECT * FROM Authors
GO