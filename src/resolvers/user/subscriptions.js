import { pubsub } from "utils";
import { USER_ADDED, USER_UPDATED, USER_DELETED } from "./types";


export default {
    userAdded: {
        subscribe: () => pubsub.asyncIterator(USER_ADDED),
    },
    userUpdated: {
        subscribe: () => pubsub.asyncIterator(USER_UPDATED),
    },
    userDeleted: {
        subscribe: () => pubsub.asyncIterator(USER_DELETED),
    },
}