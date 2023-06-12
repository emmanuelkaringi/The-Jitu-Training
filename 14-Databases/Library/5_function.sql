INSERT INTO Loans(BookID, MemberID, LoanDate, ReturnDate)
VALUES
(5, 4, '2023-06-04', '2023-06-9'),
(6, 4, '2023-06-6', '2023-06-10'),
(7, 4, '2023-06-11', '2023-06-16');


CREATE FUNCTION CalculateOverdueDays2 (@LoanID INT, @CurrentDate DATE)
RETURNS INT
AS
BEGIN
    DECLARE @OverdueDays INT;

    SELECT @OverdueDays = 
        CASE
            WHEN @CurrentDate > ReturnDate THEN DATEDIFF(DAY, ReturnDate, @CurrentDate)
            ELSE 0
        END
    FROM Loans
    WHERE LoanID = @LoanID;

    RETURN @OverdueDays;
END;



DECLARE @LoanID INT = 1;
DECLARE @CurrentDate DATE = GETDATE();

SELECT CalculateOverdueDays2(@LoanID, @CurrentDate) AS OverdueDays;