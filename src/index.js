
const express = require('express');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
    schema: buildSchema(`type Query { msg: String }`),
    rootValue: { msg: () => 'Hello World' },
    graphiql: true,
    pretty: true
}));

app.listen(3000, () => console.log('Express has been started'));

