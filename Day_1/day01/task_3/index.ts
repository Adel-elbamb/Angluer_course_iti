abstract class Shape {
    abstract area(): number;

    toString(): string {
        return `Area: ${this.area()}`;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    
    area(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }
    
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.toString());

const circ = new Circle(7);
console.log(circ.toString()); 
