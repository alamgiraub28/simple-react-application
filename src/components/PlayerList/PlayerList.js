import { faBowlingBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import css from './PlayerList.css';

const PlayerList = (props) => {
    // console.log(props);
const {name, salary, image} = props.player;

    return (
        <div className="playerList">
            <div>
                <img src={image} alt="" className="w-100"/>
            </div>
            <div>
                <h2>{name}</h2>
                <h3>Salary:{salary}</h3>
                <button className="btn btn-success pointer"
                onClick ={()=> props.handleAddPlayer(props.player)}
                >
                <FontAwesomeIcon icon={faBowlingBall}></FontAwesomeIcon> Add Player</button>
            </div>
        </div>
    );
};

export default PlayerList;