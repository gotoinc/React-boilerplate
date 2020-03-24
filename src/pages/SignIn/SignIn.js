import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { localStorage } from '../../utils';
import { RedirectRouter } from '../../routes';
import { Card, Container, Input, ErrorText, Title, Button } from '../../components';
import styles from './SignIn.module.scss';

const validationSchema = Yup.object({
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is Required'),
});

const SignIn = () => {
  return (
    <div className={styles.container}>
      <Container looks={['container-s']}>
        <Card>
          <div className={styles.formContainer}>
            <Title looks={['blue']}>
              <h1>Sign In</h1>
            </Title>
            <Formik
              validationSchema={validationSchema}
              initialValues={{ email: '', password: '' }}
              onSubmit={(values, actions) => {
                localStorage.setItem('authToken', 'token');
                localStorage.setItem('role', 'member');
                RedirectRouter.goToDashboard();
                actions.setSubmitting(false);
              }}
            >
              {({ handleSubmit, handleChange, handleBlur, values, errors, isValid }) => (
                <form onSubmit={handleSubmit}>
                  <div className={styles.inputContainer}>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Email"
                      value={values.email}
                      name="email"
                      type="email"
                    />
                    {errors.email && (
                      <div className={styles.errorContainer}>
                        <ErrorText>{errors.email}</ErrorText>
                      </div>
                    )}
                  </div>
                  <div className={styles.inputContainer}>
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Password"
                      value={values.password}
                      name="password"
                      type="password"
                    />
                    {errors.password && (
                      <div className={styles.errorContainer}>
                        <ErrorText>{errors.password}</ErrorText>
                      </div>
                    )}
                  </div>
                  <div className={styles.buttonContainer}>
                    <Button type="submit" disabled={!isValid}>
                      Submit
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default SignIn;
