import React from 'react'
import axios from 'axios'

class Contacts extends React.Component {

  componentDidMount() {
    axios.get('/api/contacts')
      .then(res => this.setState({ contacts: res.data }))
  }

  render() {
    return (
      <div>
        {this.state.contacts.map(contact => <div key={contact.id}>
          <h2>{contact.name}</h2>
        </div>)}
      </div>
    )
  }
}

export default Contacts()
