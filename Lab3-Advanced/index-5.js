/*The following car object has several properties and a method which uses them to print a description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?*/
//description function has context and is passed as a reference, so its context is lost.

/*
a) Fix the setTimeout call by wrapping the call to car.description() inside a
function

b) Change the year for the car by creating a clone of the original and overriding it

c) Does the delayed description() call use the original values or the new values from
b)? Why?

d) Use bind to fix the description method so that it can be called from within
setTimeout without a wrapper function

e) Change another property of the car by creating a clone and overriding it, and test that
setTimeout still uses the bound value from d)*/

let car = {
  make: "Porsche",
  model: '911',
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
car.description(); //works 1.
//setTimeout(car.description, 200); //fails

//(a)
setTimeout(()=> car.description(),200); //3.

//(b)
car = {...car, year:2010};
//car.description();

//(c) New values. The year value was changed when the delayed function was called.

//(d)
const boundFunc = car.description.bind(car)
setTimeout(boundFunc, 3000); //4

//(e) bind still keeps the object content which is bound.
car = {...car, make:'Ford', model:'Escape', year:2015};
car.description(); //2.
setTimeout(boundFunc, 5000); //5




