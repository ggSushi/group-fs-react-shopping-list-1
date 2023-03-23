import React from 'react';

import Header from '../Header/Header.jsx'
import AddItem from '../ShoppingList/ShoppingForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <AddItem />
                <ShoppingList />
            </main>
        </div>
    );
}

export default App;
