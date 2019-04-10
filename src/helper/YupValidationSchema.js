import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Username is too short!')
    .max(50, 'Username is too long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Password is too short!')
    .max(50, 'Password is too long!')
    .required('Required'),
});