import React, { useEffect, useContext } from 'react';
import { Context } from '../../Store/Store';
import Icon from '../../Home/Icon/Icon';
import Button from '../Button/Button';
import './game.css';


const Game = ({ setShowGame }) => {
    const [state, dispatch] = useContext(Context);
    const { pick, symbol } = state.userPick;
    const { cpuPick, cpuSymbol } = state.cpuPick;
    const { showGame } = state.showGame;
    const iconDiv = document.querySelector('.icons-div');

    useEffect(() => {
        const cpuDiv = document.querySelector('.cpu');
        const emptyDiv = document.querySelector('.empty-icon');
        const resultDiv = document.querySelector('.win-lose');
        const resultText = document.querySelector('.win-lose-text');

        setTimeout(() => {
            emptyDiv.style.display = 'none';
            cpuDiv.style.display = 'block';
        }, 2000);

        setTimeout(() => {
            resultText.innerHTML = '';
            let result = '';
            switch (true) {
                case (pick === cpuPick):
                    result += '<p>TIE</p>';
                    break;
                case (pick === 'scissors' && cpuPick === 'paper'):
                case (pick === 'paper' && cpuPick === 'rock'):
                case (pick === 'rock' && cpuPick === 'scissors'):
                    result += '<p>YOU WIN</p>';
                    dispatch({
                        type: 'SET_SCORE',
                        payload: state.score + 1
                    })
                    break;
                case (pick === 'rock' && cpuPick === 'paper'):
                case (pick === 'scissors' && cpuPick === 'rock'):
                case (pick === 'paper' && cpuPick === 'scissors'):
                    result += '<p>YOU LOSE</p>';
                    dispatch({
                        type: 'SET_SCORE',
                        payload: state.score - 1
                    })
                    break;
                default:
                    return;
            }
            resultText.innerHTML += result;
            resultDiv.style.visibility = 'visible';
        }, 3000);
    }, [])

    const handleGame = () => {
        dispatch({
            type: 'SET_SHOW_GAME',
            payload: false
        })
    }

    return (
        <div>
            <div className="results">
                <div className="game-results">
                    <Icon symbol={symbol} pick={pick} />
                    <div className="empty-icon">a</div>
                    <div className="cpu">
                        <Icon symbol={cpuSymbol} pick={cpuPick} />
                    </div>
                </div>
                <div className="game-results-text">
                    <div className="user-pick">
                        YOU PICKED
                    </div>
                    <div className="cpu-pick">
                        THE HOUSE PICKED
                    </div>
                </div>
            </div>
            <div className="win-lose">
                <div className="win-lose-text">
                    <p></p>
                </div>
                <div className="win-lose-button" onClick={handleGame}>
                    <Button setShowGame={setShowGame} />
                </div>
            </div>
        </div>
    )
}

export default Game;