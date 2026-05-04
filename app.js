const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const moviesRouter = require("./router/appRouters");

const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require('./middlewares/notFound');

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.static('public'));

app.use(express.json());

app.use("/movies", moviesRouter);

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log(`example listening on port ${port}`);
});