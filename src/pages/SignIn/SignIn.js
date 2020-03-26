import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormattedMessage, useIntl } from 'react-intl';
import { localStorage } from '../../utils';
import { RedirectRouter } from '../../routes';
import { Card, Container, Input, ErrorText, Title, Button } from '../../components';
import styles from './SignIn.module.scss';
import defaultLang from '../../translations/defaultLang';

const SignIn = () => {
  const intl = useIntl();

  const emailPlaceholder = intl.formatMessage({ id: 'sign-in.email-placeholder' });
  const passwordPlaceholder = intl.formatMessage({ id: 'sign-in.password-placeholder' });
  const errorNoPassword = intl.formatMessage({ id: 'sign-in.error-no-password' });
  const errorShortPassword = intl.formatMessage({ id: 'sign-in.error-short-password' });
  const errorNoEmail = intl.formatMessage({ id: 'sign-in.error-required-email' });
  const errorInvalidEmail = intl.formatMessage({ id: 'sign-in.error-invalid-email' });

  const validationSchema = Yup.object({
    password: Yup.string()
      .required(errorNoPassword)
      .min(8, errorShortPassword),
    email: Yup.string()
      .email(errorInvalidEmail)
      .required(errorNoEmail),
  });

  return (
    <div className={styles.container}>
      <Container looks={['container-s']}>
        <Card>
          <div className={styles.formContainer}>
            <Title looks={['blue']}>
              <h1>
                <FormattedMessage
                  id="sign-in.title"
                  defaultMessage={defaultLang['sign-in.title']}
                />
              </h1>
            </Title>
            <Formik
              validationSchema={validationSchema}
              initialValues={{ email: '', password: '' }}
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
                      looks={['input', 'required']}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={emailPlaceholder}
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
                      looks={['input', 'required']}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={passwordPlaceholder}
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
                      <FormattedMessage
                        id="sign-in.submit"
                        defaultMessage={defaultLang['sign-in.submit']}
                      />
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
            <div className={styles.redirectLinkContainer}>
              <Title looks={['blue']}>
                <FormattedMessage
                  id="sign-in.redirect-title"
                  defaultMessage={defaultLang['sign-in.redirect-title']}
                />
              </Title>
              <div
                className={styles.redirectLink}
                onClick={RedirectRouter.goToSignUpPage}
                onKeyPress={RedirectRouter.goToSignUpPage}
                tabIndex={0}
                role="link"
              >
                <FormattedMessage
                  id="sign-in.redirect-message"
                  defaultMessage={defaultLang['sign-in.redirect-message']}
                />
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default SignIn;
