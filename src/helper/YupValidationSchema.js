import * as Yup from 'yup';

export const UsernameYup = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Username is too short!')
    .max(50, 'Username is too long!')
    .required('Required'),
  
});

export const PasswordYup = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Password is too short!')
    .max(50, 'Password is too long!')
    .required('Required'),
  confirmPassword: Yup.string()
    .min(2, 'Password is too short!')
    .max(50, 'Password is too long!')
    .required('Required'),
});

export const EmailYup = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Username is too short!')
    .max(50, 'Username is too long!')
    .email('Email does not looks right')
    .required('Required'),
});