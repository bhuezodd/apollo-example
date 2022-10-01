export default {
    addUser(context, args) {
        const { input } = args;
        return {
            id: 1,
            name: input.name,
            email: input.email
        };
    }
}