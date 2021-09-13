import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContactOperacion } from "../../../redux/contacts/operations";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(2, 1),
    width: 340,
  },
}));

function ContactItem({ name, id, number }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <ListItem className={classes.demo}>
      <ListItemAvatar>
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={number}
        className={classes.margin}
      />
      <ListItemSecondaryAction>
        <IconButton
          color="secondary"
          aria-label="Delete"
          onClick={() => dispatch(deleteContactOperacion(id))}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
