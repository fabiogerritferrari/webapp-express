const express = require(express);
const app = express();
const port = 3000;

const filmRouter = require("./router/appRouters");

const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require('./middlewares/notFound');

app.use(errorsHandler);
app.use(notFound);

app.use(express.static('public'));

app.use(express.json());

app.use("/api/films", filmRouter);

app.listen(port, () => {
    console.log(`example listening on port ${port}`);
});