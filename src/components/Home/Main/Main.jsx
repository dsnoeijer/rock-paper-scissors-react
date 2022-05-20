import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Store/Store';

import Icon from '../Icon/Icon';
import Game from '../../Game/Game/Game';
import rock from '../../../assets/img/icon-rock.svg';
import paper from '../../../assets/img/icon-paper.svg';
import scissors from '../../../assets/img/icon-scissors.svg';
import bg from '../../../assets/img/bg-triangle.svg';
import './main.css';


const Main = () => {
    const [state, dispatch] = useContext(Context);
    const [showGame, setShowGame] = useState(false);
    const iconDiv = document.querySelector('.icons-div');

    useEffect(() => {
        const options = ['rock', 'paper', 'scissors'];
        const randomOption = Math.floor(Math.random() * 3);
        const computer = options[randomOption];

        if (computer === 'rock') {
            dispatch({
                type: 'SET_CPU_PICK',
                payload: {
                    cpuPick: 'rock',
                    cpuSymbol: rock
                }
            })
        } else if (computer === 'paper') {
            dispatch({
                type: 'SET_CPU_PICK',
                payload: {
                    cpuPick: 'paper',
                    cpuSymbol: paper
                }
            })
        } else {
            dispatch({
                type: 'SET_CPU_PICK',
                payload: {
                    cpuPick: 'scissors',
                    cpuSymbol: scissors
                }
            })
        }
    }, []);

    const handleChoice = () => {
        setShowGame(!showGame);
    }

    return (
        <div className="main-game-div">
            {!showGame ?
                <div className='icons-div'>
                    <div className="icons">
                        <div className='bg'>
                            <img className="bg-image" src={bg} alt="triangle background" />
                        </div>
                        <div className="icon-choice" onClick={handleChoice}>
                            <Icon symbol={paper} pick='paper' />
                        </div>
                        <div className="icon-choice" onClick={handleChoice}>
                            <Icon symbol={scissors} pick='scissors' />
                        </div>
                        <div className="icon-choice" onClick={handleChoice}>
                            <Icon symbol={rock} pick='rock' />
                        </div>
                    </div>
                </div>
                :
                <div>
                    <Game setShowGame={setShowGame} />
                </div>
            }
        </div>
    )
}

export default Main;