import React, { useEffect, useState } from 'react';
import { fakeData } from '../../fakeData/fakeData';
import PlayerList from '../PlayerList/PlayerList';
import css from './Players.css';
import Cart from '../Cart/Cart';

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [selectPlayer, setSelectPlayer] = useState([]);

    const handleAddPlayer = (player) =>{
        console.log('product added', player);
        const newSelectPlayer = [...selectPlayer, player];
        setSelectPlayer(newSelectPlayer);
    }

    useEffect(() => {
        setPlayers(fakeData)
    }, []);

    return (
        <div className="playersContainer">
            <div className="cardContainer">
                
                {
                    players.map(player => <PlayerList
                        handleAddPlayer = {handleAddPlayer}
                        player={player}
                        ></PlayerList>)
                }

            </div>
            <div className="cartContainer">
            <Cart selectPlayer = {selectPlayer}></Cart>
            
            </div>
        </div>

        
    );
};

export default Players;