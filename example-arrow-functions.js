/*var names = ['Damien', 'Jen', 'Julie'];

/*names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));*/

/*var returnMe = (name) => name + '!';
console.log(returnMe('Damien'));*/

/*var person = {
  name: 'Damien',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name)
    });
  }
};

person.greet();*/

function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) => a + b;
console.log(addExpression(8,88));

console.log(addStatement(4, 7));
