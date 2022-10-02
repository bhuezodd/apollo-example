import { pubsub } from "utils";
import { USER_ADDED, USER_UPDATED } from "./types";


export default {
    userAdded: {
        subscribe: () => pubsub.asyncIterator(USER_ADDED),
    },
    userUpdated: {
        subscribe: () => pubsub.asyncIterator(USER_UPDATED),
    }
}