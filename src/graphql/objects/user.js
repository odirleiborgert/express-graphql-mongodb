import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export default new GraphQLObjectType({
    name: 'User',
    description: 'user object',
    fields () {
        return {
            id: {
                type: GraphQLID,
                description: 'unique id',
                resolve: (user) => user.id
            },
            name: {
                type: GraphQLString,
                description: 'user name',
                resolve: (user) => user.name
            }
        }
    }
})