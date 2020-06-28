const users = [
    { id: 1, name: 'Samuel', email: 'samuel@mail.com' },
    { id: 2, name: 'Neto', email: 'neto@mail.com' },
];

module.exports = {
    Query: {
        users: () => users,
        user: ()=> users[0]
    },

    Mutation: {
        createUser: () => users[0],
    }
};