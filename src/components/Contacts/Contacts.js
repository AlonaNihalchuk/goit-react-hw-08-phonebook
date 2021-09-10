import React from "react";
import { useEffect } from "react";
import style from "./Contacts.module.css";
import ContactItem from "./ContactItem/ContactItem";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts/selectors";
import { fetchContactOperacion } from "../../redux/contacts/operations";

function Contacts() {
  const visibleContacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactOperacion());
  }, [dispatch]);

  return (
    <section className={style.contacts}>
      <ul className={style.contactsList}>
        {visibleContacts.length > 0 &&
          visibleContacts.map(({ name, number, id }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
      </ul>
    </section>
  );
}

export default Contacts;
