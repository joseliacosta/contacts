import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactAPI'
import CreateContact from './CreateContact';

class App extends Component {
  state = {
    screen: 'list',
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll().then(contacts => {
      this.setState({ contacts })
    })
  }
  createContact(contact) {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([ contact])
      }))
    })
  }

  removeContact = (contact) => {
    this.setState((state) => ({
      contacts:state.contacts.filter((c)=>c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div className='app'>
        <Route exact path="/" render={() => (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
            onNavigate={() => {
              this.setState({ screen: 'create' })
            }}
          />
        )}/>
        <Route path="/create" render={({ history }) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push("/")
            }}
          />
        )} />
      </div>
    )
  }


}

export default App;

