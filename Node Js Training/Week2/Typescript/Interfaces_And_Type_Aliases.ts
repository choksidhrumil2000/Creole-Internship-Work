//======================================Interfaces And type Aliases=======================================

/* Interfaces */
interface Rectangle4 {
  height: number,
  width: number
}

const rectangle3: Rectangle4 = {
  height: 20,
  width: 10
};

//Extending Interfaces.......................
interface Rectangle2 {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle2 {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};

/* Type Aliases */
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

//--------------------------------------------------------

//Optional And readonly are covered in previous files...............
