import React from 'react';
import css from './Cart.css'
const Cart = (props) => {
    const selectPlayer = props.selectPlayer;
    console.log(selectPlayer);
    const totalPrice= selectPlayer.reduce( (total, prd) => total + prd.salary , 0 )
    const selectedPlayerName = selectPlayer.reduce ((player, selectPlayer) => player + selectPlayer.name + ',', [])

    return (
        <div className="cart-section">
        <h3>Player List & Salary Details</h3>
        <h5>Selected Player Name: <br/> {selectedPlayerName}</h5>
        <h5>Total Player: {selectPlayer.length}</h5>
        <h5>Total Salary: {totalPrice}</h5>
        </div>
    );
};

export default Cart;