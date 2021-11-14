import React, { useEffect, useState } from 'react';
import {
  Header,
  Footer,
  PageContentContainer,
  NotificationBanner,
} from '@components';
import { Form, Input, Row, Submit } from '@components/form';
import { API_PATHS, emailRegEx } from '../staticConfig';
import { createPost } from '@utils';

export const SignUpPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [submissionError, setSubmissionError] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  //Generic
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: !!!e.target.value,
    });
  };

  const handleBlur = (e) => {
    setFormErrors({
      ...formErrors,
      [e.target.name]: !!!e.target.value,
    });
  };

  // Password
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (/\s/g.test(value)) e.target.value = value.slice(0, value.length - 1);
    else {
      setFormData({
        ...formData,
        password: value,
      });
    }

    setFormErrors({
      ...formErrors,
      password: e.target.value.length < 6,
    });
  };

  const handlePasswordBlur = (e) => {
    const value = e.target.value;
    setFormErrors({
      ...formErrors,
      password: value.length < 6,
    });
  };

  //Email
  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (/\s/g.test(value)) e.target.value = value.slice(0, value.length - 1);
    else {
      setFormData({
        ...formData,
        email: value,
      });
    }
    setFormErrors({
      ...formErrors,
      email: !emailRegEx.test(e.target.value),
    });
  };

  const handleEmailBlur = (e) => {
    setFormErrors({
      ...formErrors,
      email: !emailRegEx.test(e.target.value),
    });
  };

  //Phone number
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (!/[0-9]/.test(value.slice(-1)) || value.length > 10) {
      e.target.value = value.slice(0, value.length - 1);
    } else {
      setFormData({
        ...formData,
        phoneNumbers: [Number.parseInt(value)],
      });
    }

    setFormErrors({
      ...formErrors,
      phoneNumbers: e.target.value.length >= 1 && e.target.value.length < 10,
    });
  };

  const handlePhoneNumberBlur = (e) => {
    const value = e.target.value;
    setFormErrors({
      ...formErrors,
      phoneNumbers: value.length >= 1 && value.length < 10,
    });
  };

  //Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSubmitDisabled) {
      setIsSubmitting(true);
      setShowNotification(false);

      createPost(API_PATHS.customer, formData)
        .then(() => {
          setShowNotification(true);
          setSubmissionError(false);
          setIsSubmitting(false);

          //Reset inputs
          Array.from(document.querySelectorAll('input')).forEach(
            (input) => (input.value = '')
          );
          setFormData(initialFormData);
        })
        .catch(() => {
          setShowNotification(true);
          setSubmissionError(true);
          setIsSubmitting(false);
        });
    }
  };

  useEffect(() => {
    setIsSubmitDisabled(
      Object.values(formErrors).includes(true) ||
        Object.values(formData).includes('')
    );
  }, [formData, formErrors]);

  return (
    <>
      <Header />
      {showNotification && (
        <NotificationBanner
          showNotification={setShowNotification}
          isError={submissionError}
        />
      )}
      <PageContentContainer styles="py-4 my-10">
        <Form id="signup" onSubmit={handleSubmit} styles="max-w-lg m-auto">
          <h2 className="header-md-bold mb-8">Create an account</h2>
          <Row>
            <Input
              name="fname"
              label="First Name"
              onChange={handleChange}
              onBlur={handleBlur}
              showError={formErrors.fname}
              required
            />
            <Input
              name="lname"
              label="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
              showError={formErrors.lname}
              required
            />
          </Row>
          <Row>
            <Input
              name="email"
              label="Email"
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              showError={formErrors.email}
              required
            />
          </Row>
          <Row>
            <Input
              name="password"
              label="Password"
              type="password"
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              showError={formErrors.password}
              required
            />
          </Row>
          <Row>
            <Input
              name="phoneNumber"
              label="Phone Number"
              type="text"
              onChange={handlePhoneNumberChange}
              onBlur={handlePhoneNumberBlur}
              showError={formErrors.phoneNumbers}
            />
          </Row>
          <Row>
            <Submit
              form="signup"
              isSubmitting={isSubmitting}
              disabled={isSubmitDisabled}
            >
              Sign Up
            </Submit>
          </Row>
        </Form>
      </PageContentContainer>
      <Footer />
    </>
  );
};

const initialFormData = {
  fname: '',
  lname: '',
  email: '',
  password: '',
  phoneNumbers: [],
};

const initialFormErrors = {
  fname: false,
  lname: false,
  email: false,
  password: false,
  phoneNumbers: false,
};
