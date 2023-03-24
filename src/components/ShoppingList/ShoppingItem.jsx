import axios from 'axios';

function ShoppingItem ({ item, fetchItemList }) {

    const removeItem = (event) => {
        console.log( `removeItem ${item.id}` );
        axios.delete(`/list/${item.id}`).then((response) => {
            fetchItemList();
        }).catch((error) => {
            console.log( `Error in removeItem ${error}` );
            alert( 'Something went wrong.' );
        })
    }

    const purchaseItem = (event) => {
        axios.put( `/list/${item.id}` ).then((response) => {
            fetchItemList();
        }).catch((error) => {
            console.log( `Error PUT ${error}` );
            alert( 'Something went wrong' );
        })
    }

    return (
        <>
        <li key={item.id}>
            {item.name}
            <br />
            {item.quantity} {item.unit}
            <br />
            <button onClick={ (event) => purchaseItem(event) }>{item.purchased}</button><button onClick={ (event) => removeItem(event) }>Remove</button>
            <br />
            <br />
        </li>
        </>
    )
}

export default ShoppingItem;