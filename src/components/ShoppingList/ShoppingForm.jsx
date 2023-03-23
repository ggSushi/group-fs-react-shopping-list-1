import React, { useState, useEffect } from 'react';

function ShoppingForm() {
    return (
        <div>
            <h2>Add Item</h2>
            <br />
            Item: <input type="text"></input>
            <br />
            Quantity: <input type="number"></input>
            <br />
            Unit: <input type="text"></input>
            <br />
            <br />
            <button>Save</button>
        </div>
    )
}


export default ShoppingForm;