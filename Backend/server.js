const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config({ path: "./config.env" })

const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

const memberRouter = require('./routes/memberRouter')
const bookRouter = require('./routes/ิิbookRouter')

app.use('/api/libtary', memberRouter)
app.use('/api/library', bookRouter)

// test api
app.get('/api/libary/user-test', (req, res) => {
  res.send('Hello User');
});

// Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});