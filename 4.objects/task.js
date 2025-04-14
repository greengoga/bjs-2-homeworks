function Student(name, gender, age, marks) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

const student1 = new Student("John", "M", 18, [0, 1, 2]);
const student2 = new Student("Jack", "M", 19, [3, 5, 4]);
const student3 = new Student("Jane", "F", 18, [5, 4, 2]);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.excluded) {
		return;
	}

	this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}

	const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}