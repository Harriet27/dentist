const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req,res) => {
    res.status(200).send(`<h1>API is running at port ${port}</h1>`);
});

const {
    mondayRouter,
    tuesdayRouter,
    wednesdayRouter,
    thursdayRouter,
    fridayRouter,
    saturdayRouter,
    sundayRouter,
} = require('./router');

app.use('/monday', mondayRouter);
app.use('/tuesday', tuesdayRouter);
app.use('/wednesday', wednesdayRouter);
app.use('/thursday', thursdayRouter);
app.use('/friday', fridayRouter);
app.use('/saturday', saturdayRouter);
app.use('/sunday', sundayRouter);

app.listen(port, () => console.log(`API active at port ${port}`));

