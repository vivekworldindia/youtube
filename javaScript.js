class Car{
    constructor(name,year,color,price){
        this.name = name;
        this.year = year;
        this.color = color;
        this.price = price;
    }

    getCareInfo(name){
        return `Car name: ${this.name}`
    }

    getCarPrice(){
        return `Car price:${this.price}`
    }

}

const CarUs = new Car("BMW",2020,"Black",50000)
console.log(CarUs.getCareInfo())