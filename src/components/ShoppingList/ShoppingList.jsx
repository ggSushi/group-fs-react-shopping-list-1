import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ShoppingForm from './ShoppingForm.jsx';
import ShoppingItem from './ShoppingItem.jsx';
import './ShoppingList.css';



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

    // Function to delete all from database
    const clearAll = () => {
        axios.delete( `/list2` ).then((response) => {
            fetchItemList();
        }).catch((error) => {
            console.log( `Error in DELETE list2 ${error}` );
            alert( 'Something went wrong! Better delete yourself' );
        })
    }


    // Function to reset purchase status of all items
    const resetAll = () => {
        axios.put( '/list2' ).then((response) => {
            fetchItemList();
        }).catch((error) => {
            console.log(`Error in list2 PUT ${error}`);
            alert(`Yo, dawg. You PUT things in wrong`);
        })
    };


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
            <button onClick={clearAll} >Clear</button>
            <button onClick={resetAll}>Reset</button>
            <br></br>
                <div className="itemGrid">
                    {
                        itemArray.map((item) => (
                            <ShoppingItem 
                                key={item.id}
                                item={item}
                                fetchItemList={fetchItemList}
                            />
                            

                        ))
                    }
                </div>
        </div>
        </>
    )

}

export default ShoppingList;