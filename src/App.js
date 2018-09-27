import React, { Component } from 'react';

class ContactList extends React.Component {
  render() {
    const people = [
      { name: 'Michael' },
      { name: 'Ryan' },
      { name: 'Tyler' }
    ]

    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}
class App extends Component {
  render() {
    return (
      <ContactList/>
    );
  }
}

export default App;
