import User from './user';

export default {
    Mutation: {
        ...User.Mutation,
    },
    Query: {
        ...User.Query,
    },
    Subscription: {
        ...User.Subscription,
    },
};