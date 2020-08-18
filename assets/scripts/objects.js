let person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    greet: function () {
        alert('Hi There');
    },
};

person.isAdmin = true;
delete person.age;

console.log(person);
