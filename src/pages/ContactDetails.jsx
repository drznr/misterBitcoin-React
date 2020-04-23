import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getContactById } from '../store/actions/ContactAction';
import { getNeigContact } from '../store/actions/ContactAction';
import { addMove } from '../store/actions/UserActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';

import TransferFund from '../cmps/TransferFund';
import MoveList from '../cmps/MoveList';

class ContactDetails extends React.Component {
  state = {
    amount: 0
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContactById(id);
  }

  onPageChange = async (diff) => {
    const { id } = this.props.match.params;
    await this.props.getNeigContact(id, diff);
    this.props.history.replace(this.props.contact._id);
  }

  handleChange = (amount) => {
    this.setState({ amount });
  }

  onTransferCoins = (ev) => {
    ev.preventDefault();
    
    if (this.props.user.coins - this.state.amount >= 0 && this.state.amount > 0) {  
      this.props.addMove(this.props.contact, this.state.amount);  

      const elToggle = document.querySelector('.move-list-toggle');
      if (elToggle) elToggle.classList.toggle('animate');
      
      setTimeout(() => {
        if (this.state.amount > this.props.user.coins) this.setState({ amount: this.props.user.coins });  
      }, 0);
    }
    else Swal.fire({
      title: 'Oops',
      text: 'Transfer declined, invalid amount',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }

  get movesToContact() {
    return this.props.user.moves.filter(move => move.toId === this.props.contact._id);
  }

  render() {
    return (
      this.props.contact &&
      <section className="contact-details">
        <div className="container">
          <nav className="contact-details-nav">
            <NavLink to="/contact" className="contact-details-nav-link back">
              <FontAwesomeIcon icon="arrow-alt-circle-left" />
            </NavLink>
            <NavLink to={'/contact/edit/' + this.props.contact._id} className="contact-details-nav-link action">
              <FontAwesomeIcon icon="edit" />
            </NavLink>
          </nav>
          <main>
            <FontAwesomeIcon icon="chevron-left" onClick={this.onPageChange.bind(null, -1)} className="contact-details-prev" title="Previous" />
            <div className="contact-details-card">
              <img src={`https://robohash.org/${this.props.contact._id}?set=set4`} alt="contact" />
              <span className="contact-details-card-txt">
                <h3>{this.props.contact.name}</h3>
                <p>{this.props.contact.phone}</p>
                <p>{this.props.contact.email}</p>
              </span>
            </div>
            <FontAwesomeIcon icon="chevron-right" onClick={this.onPageChange.bind(null, 1)} className="contact-details-next" title="Next" />
          </main>
          {
            this.props.user.coins ?
            <TransferFund
            onTransferCoins={this.onTransferCoins}
            handleChange={this.handleChange}
            amount={this.state.amount}
            maxCoins={this.props.user.coins}
            />
            : 
            null
          }
        </div>
        {(this.movesToContact.length) ? <MoveList title={`Your moves to ${this.props.contact.name}`} moves={this.movesToContact} /> : ''}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact.currContact,
    user: state.user.loggedUser
  }
}
const mapDispatchToProps = {
  getContactById,
  getNeigContact,
  addMove
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
