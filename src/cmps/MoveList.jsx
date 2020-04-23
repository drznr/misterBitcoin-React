import React from 'react';
import Moment from 'react-moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MoveList(props) {
    return (
        <div className="move-list-container container">
            <input type="checkbox" id="moveListToggle" hidden />
            <label htmlFor="moveListToggle" className="move-list-toggle">
                    <FontAwesomeIcon icon="exchange-alt" title="Moves History" />
            </label>
            <aside className="move-list">
                <h3>
                   <span>
                        <FontAwesomeIcon icon="exchange-alt" title="Moves History" className="icon" />{props.title}
                   </span>
                </h3>
                <ul>
                    {
                        props.moves.map(move => <li key={move._id}>
                            <p className="__sum"><span className="money">${move.amount.toFixed(2)}</span> | <span className="btc">&#8383; 0.6543354</span></p>
                            <p className="__to">To: {move.to}</p>
                            <p className="__at">
                                <Moment fromNow>{move.at}</Moment> | <Moment format='DD.MM.YYYY HH:mm:ss'>{move.at}</Moment>
                            </p>
                        </li>)
                    }
                </ul>
            </aside>
        </div>
    );
}

export default MoveList;