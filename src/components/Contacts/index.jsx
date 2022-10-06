import { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Öznur",
      phone_number: "53535"
    },
    {
      fullname: "Ayşe",
      phone_number: "456456"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id='container'>
      <h1>Kişi Listesi</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;