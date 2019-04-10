import React from 'react'

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

import { Formik } from 'formik';

// const useStyles = makeStyles(theme => ({
//     container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     textField: {
//       marginLeft: theme.spacing.unit,
//       marginRight: theme.spacing.unit,
//       width: 200,
//     },
//     dense: {
//       marginTop: 19,
//     },
//     menu: {
//       width: 200,
//     },
//   }));

function ReTextField(props) {
    // const classes = useStyles();
    // const [values, setValues] = React.useState({
    //     name: '',
    // });

    // const handleChange = name => event => {
    //     setValues({ ...values, [name]: event.target.value });
    // };
  return (
    <div>
      <Formik>
          <TextField
          id={props.id}
          label={props.label}
          placeholder={props.placeholder}
          variant="outlined"
          margin="normal"
          />
      </Formik>
    </div>
  )
}

export default ReTextField