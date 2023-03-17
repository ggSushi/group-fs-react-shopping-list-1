import React, {useState, useEffect} from 'react';
import axios from 'axios';



function ShoppingList() {
    let [itemName, setItemName] = useState('');
    let [itemQuant, setItemQuant] = useState('');
    let [itemUnit, setItemUnit] = useState('');
    let [itemArray, setItemArray] = useState([]);

    const fetchItemList = () => {
        axios.get('/list').then((response) => {
            setItemArray(response.data);
            console.log('test', itemArray);
        }).catch((error) => {
            console.log(`Error in GET`);
            alert(`Something's up, my guy`);
        })
    }

    useEffect(() => {
        fetchItemList();
    }, []);

    const addItem = (event) => {
        event.preventDeafault();
        
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
        <div>
            <h1>Shopping List</h1>
            <button >Clear</button>
            <button >Reset</button>
            <ul>
                {
                    itemArray.map((item) => (
                        <li key={item.id}>
                            {item.name}
                            <br />
                            {item.quantity}
                            <br />
                            {item.unit}
                        </li>

                    ))
                }
            </ul>
        </div>
    )

}

export default ShoppingList;