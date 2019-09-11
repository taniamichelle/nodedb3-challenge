# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT P.ProductName, C.CategoryName 
FROM Products as P
JOIN Categories as C ON P.CategoryId = C.CategoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT O.OrderId, S.ShipperName
FROM Orders AS O 
JOIN Shippers AS S ON O.ShipperId = S.ShipperId
WHERE O.OrderDate < '1997-01-09'


### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT P.ProductName, OD.OrderId, OD.Quantity
FROM Orders AS O
JOIN OrderDetails AS OD ON O.OrderId = OD.OrderId
JOIN Products AS P ON OD.ProductId = P.ProductId
WHERE O.OrderId = 10251
ORDER BY ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT O.OrderId, C.CustomerName, E.LastName
FROM Orders as O
JOIN Customers as C on C.CustomerId = O.CustomerId
JOIN Employees as E on E.EmployeeId = O.EmployeeId

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.



### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

