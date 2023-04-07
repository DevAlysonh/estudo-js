enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Alyson',
    age: 29,
    hobbies: ['Pay Guitar', 'Study', 'Party'],
    role: Role.ADMIN
};

console.log(`${person.name} likes: `);

for (const hobbie of person.hobbies) {
    console.log(hobbie.toUpperCase());
}

if(person.role == Role.ADMIN) {
    console.log('Is Admin');
}