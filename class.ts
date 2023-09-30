type candidate = {
  name: string;
  id: number;
};

class mainClass {
  name: string;
  id: number;

  work() {
    console.log("he is working");
  }
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;

    console.log(name);
  }
}

const user: candidate = new mainClass("Moksh", 1);
// console.log(user.id);
