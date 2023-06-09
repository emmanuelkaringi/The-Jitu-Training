CREATE DATABASE Library;
GO

USE Library;
GO

CREATE TABLE Books(
    BookID INT IDENTITY(1,1) PRIMARY KEY,
    Title VARCHAR(100) NOT NULL,
    Author VARCHAR(50) NOT NULL,
    PublicationYear DATE,
    Status VARCHAR(20) DEFAULT 'Available'
);
GO

CREATE TABLE Members(
    MemberID INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Address VARCHAR(50) NOT NULL,
    ContactNumber VARCHAR(50) NOT NULL
);
GO

CREATE TABLE Loans(
    LoanID INT IDENTITY(1,1) PRIMARY KEY,
    BookID INT NOT NULL UNIQUE,
    MemberID INT NOT NULL,
    LoanDate DATE NOT NULL,
    ReturnDate DATE NOT NULL,
    FOREIGN KEY (BookID) REFERENCES Books(BookID),
    FOREIGN KEY (MemberID) REFERENCES Members(MemberID)
);
GO