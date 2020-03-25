import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { localStorage } from '../../utils';
import { RedirectRouter } from '../../routes';
import { Card, Container, Input, ErrorText, Title, Button } from '../../components';
import styles from './SignUp.module.scss';

const validationSchema = Yup.object({
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is Required'),
});

const SignUp = () => {
  return (
    <div className={styles.container}>
      <Container looks={['container-s']}>
        <Card>
          <div className={styles.formContainer}>
            <Title looks={['blue']}>
              <h1>Registration</h1>
            </Title>
            <Formik
              validationSchema={validationSchema}
              initialValues={{ email: '', password: '', passwordConfirmation: '' }}
              onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                localStorage.setItem('authToken', 'token');
                localStorage.setItem('role', 'member');
                RedirectRouter.goToDashboard();
              }}
            >
              {({ handleSubmit, handleChange, handleBlur, values, errors, isValid }) => (
                <form onSubmit={handleSubmit}>
                  <div className={styles.inputContainer}>
                    <Input
                      looks={['required', 'input']}
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
                      looks={['required', 'input']}
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
                  <div className={styles.inputContainer}>
                    <Input
                      looks={['required', 'input']}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Confirm your password"
                      value={values.passwordConfirmation}
                      name="passwordConfirmation"
                      type="password"
                    />
                    {errors.passwordConfirmation && (
                      <div className={styles.errorContainer}>
                        <ErrorText>{errors.passwordConfirmation}</ErrorText>
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
            <div className={styles.redirectLinkContainer}>
              <Title looks={['blue']}>
                <h3 className={styles.redirectTitle}>Already have an account?</h3>
              </Title>
              <div
                className={styles.redirectLink}
                onClick={RedirectRouter.goToSignInPage}
                onKeyPress={RedirectRouter.goToSignInPage}
                tabIndex={0}
                role="link"
              >
                Redirect to Sign in page
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default SignUp;
