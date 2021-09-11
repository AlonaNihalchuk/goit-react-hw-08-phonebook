import Form from "../../components/Form/Form";
import Filter from "../../components/Filter/Filter";
import Contacts from "../../components/Contacts/Contacts";
import s from "./ContactsView.module.css";

function ContactsView() {
  return (
    <section className={s.phonebook}>
      <h1 className={s.phonebookHeader}>Phonebook</h1>
      <Form />
      <h2 className={s.contactsHead}>Contacts </h2>
      <Filter />
      <Contacts />
    </section>
  );
}

export default ContactsView;
