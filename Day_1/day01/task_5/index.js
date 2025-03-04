var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, fname, lname, age, salary, address) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.salary = salary;
        this.address = address;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, fname, lname, age, salary, address) {
        return _super.call(this, id, fname, lname, age, salary, address) || this;
    }
    Manager.prototype.showEmployeeData = function (employees, empId) {
        var emp = employees.find(function (e) { return e.id === empId; });
        if (emp) {
            console.log(ID, $, { emp: emp, : .id }, Name, $, { emp: emp, : .fname }, $, { emp: emp, : .lname }, Age, $, { emp: emp, : .age }, Salary, $, { emp: emp, : .salary });
        }
        else {
            console.log(Employee);
            with (ID)
                $;
            {
                empId;
            }
            not;
            found.;
            ;
        }
    };
    return Manager;
}(Employee));
var emp1 = new Employee(1, "John", "Doe", 30, 5000, { city: "NY", street: "5th Ave", zCode: "10001" });
var emp2 = new Employee(2, "Jane", "Smith", 28, 5500, { city: "LA", street: "Sunset Blvd", zCode: "90001" });
var manager = new Manager(99, "Boss", "Man", 45, 10000, { city: "SF", street: "Market St", zCode: "94103" });
manager.showEmployeeData([emp1, emp2], 1);
manager.showEmployeeData([emp1, emp2], 3);
