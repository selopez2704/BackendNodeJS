const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');
const cors = require('cors)

const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server Express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Listen in port: ' + port)
})
