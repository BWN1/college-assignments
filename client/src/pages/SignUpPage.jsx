import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Header, Footer, PageContentContainer } from '@components';
import { Form, Input, Row, Submit } from '@components/form';
import { API_PATHS, emailRegEx } from '../staticConfig';
import { createPost } from '../utils/createPost';
import { ReactComponent as Close } from '@icons/cancel.svg';

export const SignUpPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [submissionError, setSubmissionError] = useState(false);
  const history = useHistory();

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

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (value.length < 6) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: true,
      });
      setFormData({
        ...formData,
        [e.target.name]: e.target.value.trim(),
      });
    } else {
      setFormErrors({
        ...formErrors,
        [e.target.name]: false,
      });
      setFormData({
        ...formData,
        [e.target.name]: e.target.value.trim(),
      });
    }
  };

  const handlePasswordBlur = (e) => {
    const value = e.target.value;
    if (value.length < 6) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: true,
      });
    } else {
      setFormErrors({
        ...formErrors,
        [e.target.name]: false,
      });
    }
  };

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

    if (e.target.value.length >= 1 && e.target.value.length < 10) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: true,
      });
    } else {
      setFormErrors({
        ...formErrors,
        [e.target.name]: false,
      });
    }
  };

  const handlePhoneNumberBlur = (e) => {
    const value = e.target.value;
    if (value.length >= 1 && value.length < 10) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: true,
      });
    } else {
      setFormErrors({
        ...formErrors,
        [e.target.name]: false,
      });
    }
  };

  const handleBlur = (e) => {
    setFormErrors({
      ...formErrors,
      [e.target.name]: !!!e.target.value,
    });
  };

  const handleEmailBlur = (e) => {
    setFormErrors({
      ...formErrors,
      [e.target.name]: !emailRegEx.test(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Update errors state
    const { fname, lname, email, password } = formData;
    setFormErrors({
      fname: !!!fname,
      lname: !!!lname,
      email: !!!email,
      password: !!!password,
    });

    //Check if fields are empty
    if (!!!fname || !!!lname || !!!email || !!!password) setIsSubmitting(false);
    else {
      setIsSubmitting(true);
      createPost(API_PATHS.customer, formData)
        .then(() => history.push('/'))
        .catch(() => {
          setSubmissionError(true);
          setIsSubmitting(false);
        });
    }
  };

  useEffect(() => {
    setIsSubmitDisabled(false);
    Object.entries(formErrors).forEach(([, error]) => {
      if (error) setIsSubmitDisabled(true);
    });

    const { fname, lname, email, password } = formData;
    if (!!!fname || !!!lname || !!!email || !!!password)
      setIsSubmitDisabled(true);
  }, [formData, formErrors, history]);

  return (
    <>
      <Header />
      {submissionError && (
        <div className="text-white bg-red-500 py-2 w-full text-center">
          <span className="text-sm inline-block w-64 ml-8 md:ml-10 md:w-auto">
            There was an error when registering. Please try again later
          </span>
          <Close
            className="float-right h-6 mr-4 mt-2 md:mt-0 hover:cursor-pointer"
            onClick={() => setSubmissionError(false)}
          />
        </div>
      )}
      <PageContentContainer styles="w-11/12 md:w-1/2 py-4 my-10">
        <Form id="signup" onSubmit={handleSubmit} styles="max-w-lg m-auto">
          <h2 className="header-md-bold mb-8">Create an account</h2>
          <Row>
            <Input
              name="fname"
              label="First Name"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              showError={formErrors.fname}
            />
            <Input
              name="lname"
              label="Last Name"
              onChange={handleChange}
              onBlur={handleBlur}
              required
              showError={formErrors.lname}
            />
          </Row>
          <Row>
            <Input
              name="email"
              label="Email"
              onChange={handleChange}
              onBlur={handleEmailBlur}
              required
              showError={formErrors.email}
            />
          </Row>
          <Row>
            <Input
              name="password"
              label="Password"
              type="password"
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              required
              showError={formErrors.password}
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
