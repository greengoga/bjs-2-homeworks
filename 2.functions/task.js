function getArrayParams(...arr) {
	var min = arr[0];
	var max = arr[0];
	var sum = 0;

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		if (current > max) {
			max = current;
		} else if (current < min) {
			min = current;
		}
		sum += current;
	}

	let avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	var sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) return 0;
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let diff = max - min;

	return diff;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	sumEvenElement = 0;
	sumOddElement = 0;

	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else
			sumOddElement += arr[i];
	}

	let diff = sumEvenElement - sumOddElement;

	return diff;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}

	if (countEvenElement === 0) {
		return 0;
	}

	return sumEvenElement / countEvenElement;

}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}