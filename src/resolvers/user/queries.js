import User from "services/User";

export default {
    async getUsers() {
        const users =  User.getUsers();

        return users;
    }
}