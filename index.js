require('dotenv').config()
const express = require('express')
const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const route = require('./routers/freelanceRoutes');
app.use('/', route);

app.listen(port, () => {
  console.log(`Server started on port ${port}` );
});


