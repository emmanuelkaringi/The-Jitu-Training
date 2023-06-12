CREATE TRIGGER UpdateBook
ON Loans
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    UPDATE Books
    SET Status = 'Loaned'
    WHERE BookID IN (SELECT BookID FROM inserted);

    UPDATE Books
    SET Status = 'Available'
    WHERE BookID IN (SELECT BookID FROM deleted);
END;



INSERT INTO Loans(BookID, MemberID, LoanDate, ReturnDate)
VALUES
(2, 2, '2023-06-11', '2023-06-16'),
(3, 2, '2023-06-11', '2023-06-16'),
(4, 2, '2023-06-11', '2023-06-16');

SELECT * FROM Books;
-- SELECT * FROM Members;
SELECT * FROM Loans;

-- DELETE FROM Loans
-- WHERE LoanID = 3;

-- SELECT * FROM Books;