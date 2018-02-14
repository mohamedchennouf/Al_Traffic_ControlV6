
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.hypot(dx, dy);
    }
  }







class Car {
    
    constructor(dep,arr) {
      this.dep = dep;
      this.arr = arr;
    }
  
     static run(dep,arr) {
    this.dep.x += 1;
    this.dep.y += 1;
    console.log(this.dep.x);
      //return Math.hypot(dx, dy);
    }

    static Trajet(){}
  }







  const dep = new Point(5, 5);
  const arr = new Point(10,10);
  //const Carv = new Car(x,y);
  Car.run(dep,arr);
