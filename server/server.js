const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//Router added
const listRouter = require('./routes/list.router.js');
const listRouter2 = require('./routes/list2.router.js');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`
app.use('/list', listRouter);
app.use('/list2', listRouter2);


/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});