import PropTypes from "prop-types";
import style from "./ContactItem.module.css";
import { useDispatch } from "react-redux";
import { deleteContactOperacion } from "../../../redux/contacts/operations";

function ContactItem({ name, id, number }) {
  const dispatch = useDispatch();

  return (
    <li className="">
      <p className="">{name}:</p>
      <p>{number}</p>
      <button
        className={style.contactsButton}
        onClick={() => dispatch(deleteContactOperacion(id))}
      >
        delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
