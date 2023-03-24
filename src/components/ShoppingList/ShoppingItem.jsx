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
        <div className="contentDiv">
            <div className="listItem" key={item.id}>
                < br/>
                < br/>
                {item.name}
                <br />
                <br />
                {item.quantity} {item.unit}
                <br />
                <br />
                <button className="buy-button" onClick={ (event) => purchaseItem(event) }>{item.purchased}</button>
                <button className="remove-button"onClick={ (event) => removeItem(event) }>Remove</button>
            </div>
        </div>
    )
}

export default ShoppingItem;