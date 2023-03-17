import React, { useState, useEffect } from 'react';

function AddItem() {
    return (
        <div>
            <h2>Add Item</h2>
            <br />
            Item: <input type="text"></input>
            <br />
            Quantity: <input type="number"></input>
            <br />
            Unit: <input type="text"></input>
        </div>
    )
}


export default AddItem;