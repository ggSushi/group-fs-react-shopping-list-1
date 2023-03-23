const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log(`Get Request made`);
    let queryText = 'Select * from list;';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error )=> {
        console.log(`Error in GET ${error}`);
        alert(`Something's wrong, bro`);
    })
});

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

// DELETE
router.delete



module.exports = router;