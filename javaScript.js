class Bird {
  fly() {
    return "Flying high!";
  }
}

class Eagle extends Bird {
  fly() {
    // Calls the parent fly() and adds more behavior
    return `${super.fly()} ...and hunting for prey!`;
  }
}


const myEagle = new Eagle();
console.log(myEagle.fly())