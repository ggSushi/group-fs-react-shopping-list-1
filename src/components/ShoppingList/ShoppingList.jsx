import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ShoppingForm from './ShoppingForm.jsx';
import ShoppingItem from './ShoppingItem.jsx'



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

    return (
        <>

        <ShoppingForm 
            itemName={itemName}
            setItemName={setItemName}
            itemQuant={itemQuant}
            setItemQuant={setItemQuant}
            itemUnit={itemUnit}
            setItemUnit={setItemUnit}
            itemArray={itemArray}
            setItemArray={setItemArray}
            fetchItemList={fetchItemList}
        />

        <div>
            <h1>Shopping List</h1>
            <button >Clear</button>
            <button >Reset</button>
            <ul>
                {
                    itemArray.map((item) => (
                        <ShoppingItem 
                            key={item.id}
                            item={item}
                            fetchItemList={fetchItemList}
                        
                        />

                    ))
                }
            </ul>
        </div>
        </>
    )

}

export default ShoppingList;