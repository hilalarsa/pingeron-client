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

export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Username is too short!')
    .max(50, 'Username is too long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Password is too short!')
    .max(50, 'Password is too long!')
    .required('Required'),
  confirmPassword: Yup.string()
    .min(2, 'Password is too short!')
    .max(50, 'Password is too long!')
    // .matches(password, 'Password does not match')
    .required('Required'),
});

export const EmailSubscriptionSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Username is too short!')
    .max(50, 'Username is too long!')
    .email('Email does not looks right')
    .required('Required'),
});