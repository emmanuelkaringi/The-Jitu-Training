DROP TRIGGER PreventExcessiveBorrowing;

CREATE TRIGGER PreventExcessiveBorrowing
ON Loans
FOR INSERT
AS
BEGIN
    DECLARE @MemberID INT;
    DECLARE @BookCount INT;

    SELECT @MemberID = MemberID FROM inserted;

    SELECT @BookCount = COUNT(*) FROM Loans WHERE MemberID = @MemberID;

    IF @BookCount > 3
    BEGIN
        RAISERROR('Cannot borrow more than three books at a time.', 16, 1);
        ROLLBACK TRANSACTION;
    END;
END;


INSERT INTO Loans(BookID, MemberID, LoanDate, ReturnDate)
VALUES
(9, 5, '2023-06-04', '2023-06-9');

SELECT * FROM Loans;