import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ShoppingForm({ itemName, setItemName, itemQuant, setItemQuant, itemUnit, setItemUnit, fetchItemList }) {

    const addItem = (event) => {
        event.preventDefault();
        
        axios.post('/list', {
            name: itemName,
            quantity: itemQuant,
            unit: itemUnit
        }).then((response) => {
            setItemName('');
            setItemQuant('');
            setItemUnit('');
            fetchItemList();
        }).catch((error) => {
            console.log(`Error in POST ${error}`);
            alert('GobbledeMessedup, my guy');
        })
    }

    return (
        <>
        <form onSubmit={addItem}>
            <h2>Add Item</h2>
            <br />
            Item: <input type="text" onChange={e => setItemName(e.target.value)} />
            <br />
            Quantity: <input type="number" onChange={e => setItemQuant(e.target.value)} />
            <br />
            Unit: <input type="text" onChange={(e) => setItemUnit(e.target.value)} />
            <br />
            <br />
            <button >Save</button>
        </form>
        </>
    )
}


export default ShoppingForm;