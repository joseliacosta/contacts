import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }
  state = {
    query: ''
  }
  updateQuery(query) {
    this.setState({ query: query.trim() })
  }

  render() {
    let showingContacts
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingContacts = this.props.contacts.filter((contact) => match.test(contact.name))
    } else {
      showingContacts = this.props.contacts
    }

    return(
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={this.state.query}
            onChange={event => { this.updateQuery(event.target.value) }}
          />
        </div>
        <ol className='contact-list'>
          {showingContacts.map((contact) => (
            <li className='contact-list-item' key={contact.id}>
              <div className='contact-avatar' style={{ backgroundImage: `url(${contact.avatarURL})` }} />
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button className='contact-remove' onClick={() => this.props.onDeleteContact(contact)}>
                Remove
              </button>
            </li>
          ))
          }
        </ol>
      </div>
    )
  }
}

export default ListContacts
