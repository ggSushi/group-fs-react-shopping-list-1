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
            Item: <input id="item-input" type="text" />
            <br />
            Quantity: <input id="quantity-input" type="number" />
            <br />
            Unit: <input id="unit-input" type="text" />
            <br />
            <br />
            <button >Save</button>
        </form>
        </>
    )
}


export default ShoppingForm;