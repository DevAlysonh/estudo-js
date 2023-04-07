const person = {
    name: 'Alyson',
    age: 29,
    hobbies: ['Pay Guitar', 'Study', 'Party']
};

console.log(`${person.name} likes: `);

for (const hobbie of person.hobbies) {
    console.log(hobbie.toUpperCase());
}