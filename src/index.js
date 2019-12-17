
import express from 'express';
import bodyParser from 'body-parser';
import expressGraphQL from 'express-graphql';
import mongoose from 'mongoose';
import routes from './routes';
import Schema from './graphql/index'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
    schema: Schema,
    graphiql: true,
    pretty: true
}));

// mongoose.connect('mongodb://localhost:27017/graphql_db', { useNewUrlParser: true });
mongoose.connect('mongodb://localhost:27017/graphql_db?authSource=admin', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});

routes(app);

app.listen(3000, () => console.log('Express has been started'));

