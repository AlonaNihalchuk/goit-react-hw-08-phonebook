import Form from "../../components/Form/Form";
import Filter from "../../components/Filter/Filter";
import Contacts from "../../components/Contacts/Contacts";
import s from "./ContactsView.module.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 50,
    marginLeft: 10,
    marginBottom: 10,
  },
}));

function ContactsView() {
  const classes = useStyles();

  return (
    <section className={s.phonebook}>
      <Typography variant="h4" className={classes.title}>
        Phonebook
      </Typography>
      <Form />
      <Typography variant="h4" className={classes.title}>
        Contacts
      </Typography>

      <Filter />
      <Contacts />
    </section>
  );
}

export default ContactsView;
