const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler } = require("./middlewares/errorhandler")

const app = express();
const port = 3000;

//Middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server Express');
});

routerApi(app);

app.use(logErrors)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Listen in port: ' + port)
})
