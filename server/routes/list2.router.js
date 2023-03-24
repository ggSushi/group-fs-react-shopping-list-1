const express = require('express');
const router2 = express.Router();
const pool = require('../modules/pool.js');


// PUT
router2.put('/', (req, res) => {
    console.log( `In PUT request /list2` );
    let queryText = 'UPDATE "list" SET "purchased" = $1 WHERE "purchased" = $2;';
    pool.query(queryText, [ 'Buy', 'Purchased' ]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log( `Error in PUT ${error}`)
    })
})

// DELETE
router2.delete('/', (req,res) => {
    let queryText = 'DELETE FROM "list";';
    pool.query(queryText).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in delete');
        res.sendStatus(500);
    })
});

module.exports = router2;