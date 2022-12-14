import User from "services/User";

export default {
    async getUsers() {
        const users =  User.getUsers();

        return users;
    },
    async getUser(_, { id }) {
        const user =  User.getUser(id);

        return user;
    }
}