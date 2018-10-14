import React from 'react'

function ListContacts(props) {
    return (
      <ol className='contact-list'>
        {props.contacts.map((contact) => (
          <li className='contact-list-item' key={contact.id}>
            <div className='contact-avatar' style={{ backgroundImage: `url(${contact.avatarURL})` }} />
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <button className='contact-remove' onClick={()=>props.onDeleteContact(contact)}>
              Remove
            </button>
          </li>
        ))
        }
      </ol>
    )
}

export default ListContacts