class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	get state() {
		return this._state;
	}

	//  set state(newState) {
	//    if (newState < 0) {
	//      this._state = 0;
	//    } else if (newState > 100) {
	//      this._state = 100;
	//    } else {
	//      this._state = newState;
	//    }
	//  }

	set state(newState) {
		this._state = Math.max(0, Math.min(100, newState));
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	}
}

class NovelBook extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'novel';
	}
}

class FantasticBook extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'fantastic';
	}
}

class DetectiveBook extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'detective';
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}

	giveBookByName(bookName) {
		const index = this.books.findIndex(book => book.name === bookName);
		if (index !== -1) {
			return this.books.splice(index, 1)[0];
		}
		return null;
	}
}

// пункт 5

const library = new Library("Научная библиотека");

library.addBook(new FantasticBook("Толкин", "Властелин Колец", 1954, 500));
library.addBook(new DetectiveBook("Конан Дойл", "Шерлок Холмс", 1892, 320));
library.addBook(new Magazine("Наука и жизнь", 1919, 60));

console.log(library.findBookBy("releaseDate", 1919));

const book = library.giveBookByName("Властелин Колец");
console.log(book);

book.state = 10;
console.log(book.state);

book.fix();
console.log(book.state);

library.addBook(book);

book.fix(); // 22.5
book.fix(); // 33.75

library.addBook(book);

console.log(library.books);

/*
ЗАДАЧА 3
*/

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (mark < 2 || mark > 5) {
			return;
		}
		if (!this.marks[subject]) {
			this.marks[subject] = [];
		}
		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (!this.marks[subject]) {
			return 0;
		}
		const sum = this.marks[subject].reduce((a, b) => a + b, 0);
		return sum / this.marks[subject].length;
	}

	getAverage() {
		const allMarks = Object.values(this.marks).flat();
		if (allMarks.length === 0) {
			return 0;
		}
		const sum = allMarks.reduce((a, b) => a + b, 0);
		return sum / allMarks.length;
	}
}