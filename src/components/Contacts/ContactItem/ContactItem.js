import PropTypes from "prop-types";
import style from "./ContactItem.module.css";
import { useDispatch } from "react-redux";
import { deleteContactOperacion } from "../../../redux/contacts/operations";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    // flexGrow: 1,
    // maxWidth: 752,
    // display: "flex",
    // // flexDirection: "row",
    // justifyContent: "space-between",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  // margin: {
  //   margin: theme.spacing(2, 1),
  // },
}));

// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     })
//   );
// }

function ContactItem({ name, id, number }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <ListItem className={classes.demo}>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={number}
        className={classes.margin}
      />
      {/* <ListItemText primary={number} className={classes.margin} /> */}
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
    // <div>
    //   <Grid item xs={12} md={6}>
    // <Typography variant="h6" className={classes.title}>
    //   Person
    // </Typography>
    //     <div className={classes.demo}>
    //       <List dense={name}>
    //         {generate(
    //           <ListItem>
    //             <ListItemAvatar>
    //               <Avatar>
    //                 <FolderIcon />
    //               </Avatar>
    //             </ListItemAvatar>
    //             <ListItemText primary={name} secondary={name} />
    //             <ListItemSecondaryAction>
    //               <IconButton aria-label="Delete">
    //                 <DeleteIcon />
    //               </IconButton>
    //             </ListItemSecondaryAction>
    //           </ListItem>
    //         )}
    //       </List>
    //     </div>
    //   </Grid>
    // </div>
    // <li className={style.personName}>
    //   <p className="">{name}:</p>
    //   <p>{number}</p>
    //   <button
    //     className={style.contactsButton}
    //     onClick={() => dispatch(deleteContactOperacion(id))}
    //   >
    //     delete
    //   </button>
    // </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
