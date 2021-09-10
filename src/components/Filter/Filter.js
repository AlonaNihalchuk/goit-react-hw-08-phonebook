import style from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/selectors";
import * as actions from "../../redux/contacts/actions";

function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();
  return (
    <label className={style.filter}>
      Find contact by name{" "}
      <input
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={value}
        onChange={(e) => dispatch(actions.changeFilter(e.target.value))}
      ></input>
    </label>
  );
}

export default Filter;
