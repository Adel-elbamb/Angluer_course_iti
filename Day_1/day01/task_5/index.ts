interface IEmployee {
    id: number;
    fname: string;
    lname: string;
    age: number;
    salary: number;
    address: {
        city: string;
        street: string;
        zCode: string;
    };
    getSalary(): number;
}

class Employee implements IEmployee {
    constructor(
        public id: number,
        public fname: string,
        public lname: string,
        public age: number,
        public salary: number,
        public address: { city: string; street: string; zCode: string }
    ) {}

    getSalary(): number {
        return this.salary;
    }
}

class Manager extends Employee {
    constructor(id: number, fname: string, lname: string, age: number, salary: number, address: { city: string; street: string; zCode: string }) {
        super(id, fname, lname, age, salary, address);
    }

    showEmployeeData(employees: Employee[], empId: number): void {
        const emp = employees.find(e => e.id === empId);
        if (emp) {
            console.log(ID: ${emp.id}, Name: ${emp.fname} ${emp.lname}, Age: ${emp.age}, Salary: ${emp.salary});
        } else {
            console.log(Employee with ID ${empId} not found.);
        }
    }
}

const emp1 = new Employee(1, "John", "Doe", 30, 5000, { city: "NY", street: "5th Ave", zCode: "10001" });
const emp2 = new Employee(2, "Jane", "Smith", 28, 5500, { city: "LA", street: "Sunset Blvd", zCode: "90001" });
const manager = new Manager(99, "Boss", "Man", 45, 10000, { city: "SF", street: "Market St", zCode: "94103" });

manager.showEmployeeData([emp1, emp2], 1);
manager.showEmployeeData([emp1, emp2], 3);