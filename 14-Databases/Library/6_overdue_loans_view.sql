CREATE VIEW OverdueLoansView AS
SELECT B.Title AS BookTitle, M.Name AS MemberName, DATEDIFF(DAY, L.ReturnDate, GETDATE()) AS OverdueDays
FROM Loans L
JOIN Books B ON L.BookID = B.BookID
JOIN Members M ON L.MemberID = M.MemberID
WHERE GETDATE() > L.ReturnDate;


SELECT *
FROM OverdueLoansView;