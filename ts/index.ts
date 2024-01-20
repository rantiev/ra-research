type TStringNumberUnion = string | number
const stringOrNumber: TStringNumberUnion = 1

type TMyPromisedString = Promise<string>
const promisedString: TMyPromisedString = Promise.resolve('promised string')

type TPromiseOrValue<T> = T | Promise<T>
const promiseOrString: TPromiseOrValue<string> = 'asdf'
const promiseOrNumber: TPromiseOrValue<number> = Promise.resolve(123)

type TMyCar = {
  model: string
  year: number
}

type TTrailer = {
  trailerModel: string
  traileryear: number
}

type TMyCarWithTrailer = TMyCar & TTrailer

const myCarWithTrailer: TMyCarWithTrailer = {
  model: 'x',
  year: 1986,
  trailerModel: 'y',
  traileryear: 1990
}

interface IMyCar {
  model: string
  year: number
}

interface ITrailer {
  trailerModel: string
  traileryear: number
}

interface IMyCarWithTrailer extends IMyCar, ITrailer {}

const myCarWithTrailer2: IMyCarWithTrailer = {
  model: 'x',
  year: 1986,
  trailerModel: 'y',
  traileryear: 1990
}

type IMyCarWithTrailer2 = IMyCar & ITrailer

const myCarWithTrailer3: IMyCarWithTrailer2 = {
  model: 'x',
  year: 1986,
  trailerModel: 'y',
  traileryear: 1990
}

type TMyCarKeys = keyof IMyCar

const myCar: IMyCar = {
  model: 'Tesla',
  year: 1986,
}

const myCarModelKey: TMyCarKeys = 'model'
const myCarModel = myCar[myCarModelKey]

// FUNCTIONS

type TConsolerFunction = (s: TStringNumberUnion) => void

function greeter(fn: TConsolerFunction, x: TStringNumberUnion): void {
  fn(x)
}

function consoler (s: TStringNumberUnion) {
  console.log(s)
}

greeter(consoler, 's')

// ---

type TConsolerFunctionDescribed = {
  description: string
  (d: string, s: TStringNumberUnion): void
}

function greeterDescribed(fn: TConsolerFunctionDescribed, x: TStringNumberUnion): void {
  fn(fn.description, x)
}

function consolerDescribed (d: string, s: TStringNumberUnion) {
  console.log(d + '' + s)
}

consolerDescribed.description = 'my description'

greeterDescribed(consolerDescribed, 's')

// --- Constructor

interface TCarConstructor {
  new (model: string, year: number): IMyCar
}

function carFabric (ctor: { new (model: string, year: number): Car }, model: string, year: number) {
  return new ctor(model, year)
}

class Car {
  private model
  private year

  constructor (model: string, year: number) {
    this.model = model;
    this.year = year;
  }
}

// Can't use functional constuctor with TS new() syntax
function buildCar (model: string, year: number): IMyCar {
  return {
    model,
    year
  }
}

const myCar2 = carFabric(Car, 'tesla', 1876)
