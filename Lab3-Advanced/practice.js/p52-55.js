class Person {
  static latin = 'persona'; // static (class) property, belongs to class not any instance
  constructor(name) {
  this.name = name; // standard property, is unique to each instance of the class
  }
  getName() { // standard method, belongs to each instance of the class
  return this.name;
  }
  static createAnonymous() { // static (class) method, belongs to class not any instance
  return new Person("Unnamed Person");
  }
  }
let jonas = new Person('Jonas')
console.log( jonas.getName() ) // Jonas - name and getName() belong to an instance of Person

console.log( jonas.latin ) // undefined - latin property doesn't belong to jonas
  
console.log( Person.latin ) // persona - latin property belongs to Person class
let anon = Person.createAnonymous() // use static (factory) method to create generic Person instance
console.log(anon.getName());
console.log(anon);


/*class Laptop {
  _hardDiskType = 'HDD'; // protected property, meant to be internal
  constructor(brand) {
  this.brand = brand; // public property, can be used externally by instances
  }
  getHDiskType() { return this._hardDiskType; } // public method to access protected property
  }
const macbook = new Laptop('Macbook Pro');
console.log(macbook.brand) // public property, accessed externally from any instance
console.log(macbook._hardDiskType) // works, not recommended as it violates encapsulation principles
console.log(macbook.getHDiskType()) // recommended way to access protected property*/

class Laptop {
  _hardDiskType = 'HDD'; // protected property, should only be used by inheriting classes
  #numCPUFans = 1; // private property, can only be used internally by class methods
  constructor(brand) { // constructors are always public
  this.brand = brand; // public property
  }
  isGaming() { return false; } // public method
  getHDiskType() { return this._hardDiskType; } // public method to access protected property
  _increaseCPUFans() { // protected method
  if (this.isGaming()) this.#numCPUFans++ // can access private properties internally
  }
  }
  const macbook = new Laptop('Macbook Pro');
  console.log(macbook.#numCPUFans) // error: private property is not accessible

class GamingLaptop extends Laptop {
    constructor(brand) {
    super(brand); // public property, externally available to instances
    this._hardDiskType = 'SSD'; // protected props should be accessed by children, not instances
    this.#numCPUFans = 2; // error: private property is not accessible
    this._increaseCPUFans(); // use protected method to change #numCPUFans as it's internal
    }
    isGaming() { return true; } // public method
    }
const alienware = new GamingLaptop('Alienware');
    //console.log(alienware.#numCPUFans) // error: private property is not accessible
console.log(alienware._hardDiskType) // no error: but protected property SHOULD NOT be accessed
console.log(alienware.getHDiskType()) // better: public method for accessing protected property