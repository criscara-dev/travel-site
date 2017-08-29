
var $ = require('jquery');
//var Person = require('./modules/Person'); requie is a Node method
import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes $0 in taxes. ");
    }
}

alert('ABC 645');

var john = new Person('John Doe', 'blue');
john.greet();

var jane = new Adult('Jane Doe', 'orangeYellow');
jane.greet();
jane.payTaxes();

$('h1').remove();