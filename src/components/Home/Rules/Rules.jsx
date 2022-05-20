import './rules.css';
import rulesImage from '../../../assets/img/image-rules.svg';
import iconClose from '../../../assets/img/icon-close.svg';


const showRules = () => {
    const div = document.querySelector('.showRules');
    const black = document.querySelector('.black');
    black.style.display = 'block';
    div.style.display = 'block';
}

const closeRules = () => {
    const close = document.querySelector('.showRules');
    const black = document.querySelector('.black');
    black.style.display = 'none';
    close.style.display = 'none'
}

const Rules = () => {
    return (
        <div className="rules-div">
            <div className="rules">
                <button onClick={showRules}>RULES</button>
            </div>
            <div className="showRules">
                <h1>RULES</h1>
                <div className="rulesImage">
                    <img src={rulesImage} alt="game rules" />
                </div>
                <button onClick={closeRules}>
                    <img src={iconClose} alt="close" />
                </button>
            </div>
            <div className="black"></div>
        </div>
    )
}

export default Rules;