import './button.css';


const Button = ({ setShowGame }) => {
    return (
        <div className="play-again-button">
            <button className="play" onClick={() => { setShowGame(false); }}>PLAY AGAIN</button>
        </div>
    )
}

export default Button;