@path: '/northwind'
service NorthwindService {
  entity Products {
    key ProductID  : Integer;
    ProductName    : String;
    SupplierID     : Integer;
    CategoryID     : Integer;
    QuantityPerUnit: String;
    UnitPrice      : Decimal(9,2);
    UnitsInStock   : Integer;
    UnitsOnOrder   : Integer;
    ReorderLevel   : Integer;
    Discontinued   : Boolean;
  }

  entity Categories {
    key CategoryID   : Integer;
    CategoryName     : String;
    Description      : String;
  }
}
