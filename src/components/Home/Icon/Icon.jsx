import { useContext } from 'react';
import { Context } from '../../Store/Store';
import './icon.css';

const Icon = ({ pick, symbol, color }) => {
    const [state, dispatch] = useContext(Context);
    return (
        <div className={`icon-single ${pick}`} >
            <img
                src={symbol}
                alt={pick}
                onClick={() => {
                    dispatch({
                        type: 'SET_USER_PICK',
                        payload: {
                            pick: pick,
                            symbol: symbol
                        }
                    })
                }
                } />
        </div >
    )
}

export default Icon;