import React from 'react';
import { connect } from 'react-redux';

import { bitcoinService } from '../services/BitcoinService';
import { utilService } from '../services/UtilService';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MoveList from '../cmps/MoveList';
import Illustration from '../assets/imgs/illustration.svg'

class Home extends React.Component {
    state = {
        BTC: 0
    };

    async componentDidMount() {
        const btcRate = await bitcoinService.getRate(this.props.user.coins);
        this.setState({ BTC: btcRate });
    }

    get username() {
        return this.props.user.name.charAt(0).toUpperCase() + this.props.user.name.slice(1);
    }
    get coins() {
        return (this.props.user.coins.toFixed(2)) + '$';
    }
    get lastMoves() {
        return [...this.props.user.moves.sort(utilService.dynamicSort('at')).slice(0, 3)];
    }


    render() {
        return (
            <section className="home">
                <main className="container">
                    <div className="home-details">
                        <span>
                            <h1>Hello {this.username}</h1>
                            <p className="home-details-txt"><span><FontAwesomeIcon icon="coins" /></span>{this.coins}</p>
                            <p className="home-details-txt"><span><FontAwesomeIcon icon={['fab', 'btc']} /></span>{this.state.BTC}</p>
                        </span>
                    </div>
                    <img src={Illustration} alt="illustration" className="home-illustration" />
                </main>
                {(this.lastMoves.length) ?
                    <MoveList
                        className="in-home"
                        title={(this.lastMoves.length === 1) ? 'Your last move' : `Your last ${this.lastMoves.length} moves`}
                        moves={this.lastMoves}
                    />
                    : ''}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.loggedUser
    }
}

export default connect(mapStateToProps, null)(Home);
