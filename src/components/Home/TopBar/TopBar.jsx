import { useContext } from 'react';
import { Context } from '../../Store/Store';
import './topbar.css';


const TopBar = () => {
    const [state] = useContext(Context);

    // useEffect(() => {
    //     if (score) {
    //         dispatch({ type: 'SET_SCORE', score})
    //     }
    // });

    return (
        <div className="topbar">
            <div className="topbar-container">
                <div className="topbar-text">
                    <p>ROCK</p>
                    <p>PAPER</p>
                    <p>SCISSORS</p>
                </div>
                <div className="topbar-score">
                    <p className="score">SCORE</p>
                    <p className="points">{state.score}</p>
                </div>
            </div>
        </div>
    )
}

export default TopBar;