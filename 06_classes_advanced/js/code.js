class Car {
    static color = "red";

    constructor(brand = "Mazda") {
        this._brand = brand
    }

    // Setters
    set brand(brand) {
        this._brand = brand;
    }

    // Getters
    get brand() {
        return this._brand;
    }
}

// Inheritance
class HyperCar extends Car {
    constructor(brand, name, price, battery = 0) {
        super(brand);

        this._name = name;
        this._price = price;
        this._battery = battery;
    }

    run() {
        return `Brand: ${this.brand} Name: ${this.name} Price: ${this._price} Battery: ${this._battery}`
    }
}

function example() {
    let out = ""

    // New instance
    out += `<h1>Class: ${Car.color}</h1>`;
    const demoCar = new Car("Ferrari");
    out += `<h1>Class: ${demoCar.brand}</h1>`;

    const demoHyperCar = new HyperCar("Ford", "F150", "20K", 1);
    out += `<h1>Class inheritance: ${demoHyperCar.run()}</h1>`;

    document.getElementById("root").innerHTML = out;
}

window.addEventListener("load", example);