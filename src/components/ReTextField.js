import React from 'react'

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

import { Formik, Form } from 'formik';

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
    const [values, setValues] = React.useState("");

    const handleChange = event => {
      setValues(event.target.value);
    };

  return (
    <div>
      <Formik
        // validationSchema={props.validation}
      >
      {({ errors, touched }) => (
        <Form>
          {console.log(JSON.stringify(errors))}
          {console.log(JSON.stringify(touched))}
          <TextField
            id={props.id}
            name={props.name}
            label={props.label}
            placeholder={props.placeholder}
            value={values}
            variant="outlined"
            margin="normal"
            onChange={handleChange}
          />
          {errors[props.name] && touched[props.name] ? 
            <div>{errors[props.name]}</div>
           : <div>{errors[props.name]}</div>}
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default ReTextField