import User from 'services/User';
import { pubsub } from 'utils';
import { USER_ADDED, USER_DELETED, USER_UPDATED } from './types';

export default {
    async addUser(context, args) {
        const { input } = args;

        const user = await User.addUser(input);

        pubsub.publish(USER_ADDED, { userAdded: user });
        return user;
    },

    async updateUser(context, args) {
        const { id, input } = args;

        const user = await User.updateUser(id, input);

        pubsub.publish(USER_UPDATED, { userUpdated: user });
        return user;
    },

    async deleteUser(context, args) {
        const { id } = args;

        const user = await User.deleteUser(id);

        pubsub.publish(USER_DELETED, { userDeleted: user });
        return user;
    }
    
}