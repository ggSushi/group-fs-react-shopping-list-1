const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log(`Get Request made`);
    let queryText = 'Select * from list ORDER BY purchased, name;';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error )=> {
        console.log(`Error in GET ${error}`);
        alert(`Something's wrong, bro`);
    })
});

// POST
router.post('/', (req, res) => {
    console.log(`POST`, req.body);
    let queryText = `Insert Into list ("name", "quantity", "unit")
                     Values ($1, $2, $3);`;
    pool.query(queryText, [req.body.name, req.body.quantity, req.body.unit])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in POST ${error}`);
        res.sendStatus(500);
    })
});

// PUT
router.put('/:id', (req, res) => {
    console.log( `In PUT request /list` );
    let itemId = req.params.id;
    let queryText = 'UPDATE "list" SET "purchased" = $1 WHERE "id" = $2;';

    pool.query(queryText, [ 'Purchased', itemId ]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log( `Error in PUT ${error}`)
    })
})


// DELETE
router.delete('/:id', (req,res) => {
    console.log(req.params);
    const deleteIndex = Number(req.params.id);
    let queryText = 'DELETE FROM "list" where "id" = $1';
    pool.query(queryText, [deleteIndex]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in delete');
        res.sendStatus(500);
    })
});

module.exports = router;