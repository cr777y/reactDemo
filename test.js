class Person {
  constructor() {
    this.name = "hq";
    this.age = 18;
  }
  a() {
    console.log(this);
  }
  b = () => {
    console.log(this);
  };
}
let p1 = new Person();
p1.a();
p1.b();
