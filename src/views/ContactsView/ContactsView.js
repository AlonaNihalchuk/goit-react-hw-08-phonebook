import Form from "../../components/Form/Form";
import Filter from "../../components/Filter/Filter";
import Contacts from "../../components/Contacts/Contacts";
import s from "./ContactsView.module.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
}));

function ContactsView() {
  const classes = useStyles();

  return (
    <section className={s.phonebook}>
      <Typography variant="h4" className={classes.title}>
        {/* Phonebook */}
        <h1 className={s.phonebookHeader}>Phonebook</h1>
      </Typography>
      <Form />
      <Typography variant="h5" className={classes.title}>
        <h2 className={s.contactsHead}>Contacts </h2>
      </Typography>

      <Filter />
      <Contacts />
    </section>
  );
}

export default ContactsView;
