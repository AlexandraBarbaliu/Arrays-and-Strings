const personObject = {
    name: 'John',
    age: 30,
    hobby: ['hiking', 'dogs', 'music'],
    introduction: function () {
        return `Salut! Numele meu este: ${this.name}. Am ${this.age} ani, iar ca hobby pot sa spun ca ma pasioneaza: ${this.hobby.join(', ')}.`;
    }
};

console.log(personObject.introduction())

//---------------------------------------------------------------------------

// let input = prompt('Introdu sirul de caractere');
let input = 'Test string';

// console.log(input splitted:', input.split(' '))
let inputAsArray = input.split(' ');
for(let i = 0; i < inputAsArray.length; i++) {

    console.log(`Cuvantul: ${inputAsArray[i]} are lungimea de ${inputAsArray[i].lenght} caractere.`)

}