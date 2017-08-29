class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }

    greet() {
        console.log('Hi there, my name is ' + this.name + ' and my favorite color is ' + this.favoriteColor + '.');
    }
}

// module.exports = Person; module is a Node method
export default Person;