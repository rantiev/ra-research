"use strict";
const stringOrNumber = 1;
const promisedString = Promise.resolve('promised string');
const promiseOrString = 'asdf';
const promiseOrNumber = Promise.resolve(123);
const myCarWithTrailer = {
    model: 'x',
    year: 1986,
    trailerModel: 'y',
    traileryear: 1990
};
const myCarWithTrailer2 = {
    model: 'x',
    year: 1986,
    trailerModel: 'y',
    traileryear: 1990
};
const myCarWithTrailer3 = {
    model: 'x',
    year: 1986,
    trailerModel: 'y',
    traileryear: 1990
};
const myCar = {
    model: 'Tesla',
    year: 1986,
};
const myCarModelKey = 'model';
const myCarModel = myCar[myCarModelKey];
function greeter(fn, x) {
    fn(x);
}
function consoler(s) {
    console.log(s);
}
greeter(consoler, 's');
function greeterDescribed(fn, x) {
    fn(fn.description, x);
}
function consolerDescribed(d, s) {
    console.log(d + '' + s);
}
consolerDescribed.description = 'my description';
greeterDescribed(consolerDescribed, 's');
function carFabric(ctor, model, year) {
    return new ctor(model, year);
}
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}
// Can't use functional constuctor with TS new() syntax
function buildCar(model, year) {
    return {
        model,
        year
    };
}
const myCar2 = carFabric(Car, 'tesla', 1876);
