/*
## Задача 1. Форматтер чисел
*/

function parseCount(val) {
	const parsedValue = Number.parseFloat(val);

	if (Number.isNaN(parsedValue)) {
		throw new Error('Невалидное значение');
	}

	return parsedValue;
}

const parsedValue = parseCount('10.1');
console.log(typeof parsedValue);

function validateCount(val) {
	try {
		const parsedValue = parseCount(val);
		return parsedValue;
	} catch (error) {
		return error;
	}
}

const invalidValue = validateCount('wtf');
console.log(invalidValue);
console.log(invalidValue.message);

/*
## Задача 2. Треугольник
*/

class Triangle {
	constructor(a, b, c) {
		if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
			throw new Error('Треугольник с такими сторонами не существует');
		}

		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = this.perimeter / 2;
		const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(area.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		console.log(error);

		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}

const triangle = getTriangle(5, 6, 7);

console.log(triangle.perimeter);
console.log(triangle.area);

const invalidTriangle = getTriangle(1, 2, 3);
console.log(invalidTriangle);

console.log(invalidTriangle.perimeter);
console.log(invalidTriangle.area);