const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 4000;


app.use("/beer24", require('./routes/beer24'))

app.listen(PORT, () => {
    console.log("localhost:" + PORT);
})