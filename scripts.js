const personObject = {
    name: 'John',
    age: 30,
    hobby: ['hiking', 'dogs', 'music'],
    introduction: function() {
        return `Salut! Numele meu este: ${this.name}. Am ${this.age} ani, iar ca hobby pot sa spun ca ma pasioneaza: ${this.hobby.join(', ')}.`;
    }
};

console.log(personObject.introduction())