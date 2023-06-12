INSERT INTO Loans(BookID, MemberID, LoanDate, ReturnDate)
VALUES
(5, 4, '2023-06-11', '2023-06-16'),
(6, 4, '2023-06-11', '2023-06-16'),
(7, 4, '2023-06-11', '2023-06-16');


WITH BorrowedBooks AS (
    SELECT MemberID, COUNT(*) AS BorrowedCount
    FROM Loans
    GROUP BY MemberID
    HAVING COUNT(*) >= 3
)
SELECT M.Name
FROM Members M
INNER JOIN BorrowedBooks B ON M.MemberID = B.MemberID;
