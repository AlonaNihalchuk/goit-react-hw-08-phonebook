import Form from "../components/Form/Form";
import Filter from "../components/Filter/Filter";
import Contacts from "../components/Contacts/Contacts";

function ContactsView() {
  return (
    <section className="phonebook">
      <h1>Phonebook</h1>
      <Form />
      <h2 className="contactsHead">Contacts </h2>
      <Filter />
      <Contacts />
    </section>
  );
}

export default ContactsView;
