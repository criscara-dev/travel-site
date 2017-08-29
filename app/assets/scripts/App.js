var Person = require('./modules/Person');

var john = new Person('John Doe', 'blue');
john.greet();
john.name;

var jane = new Person('Jane Doe', 'green');
jane.greet();
jane.favoriteColor;