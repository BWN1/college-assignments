import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Header, Footer, PageContentContainer } from '@components';
import { Form, Input, Row, Submit } from '@components/form';
import { API_URL, emailRegEx } from '../staticConfig';
import { createPost } from '../utils/createPost';
import { ReactComponent as Close } from '@icons/cancel.svg';

export const SignUpPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handlePhoneNumbersChange = (e) => {
    const value = e.target.value;
    if (!/[0-9]/.test(value.slice(-1)) && value.slice(-1) !== ',') {
      e.target.value = value.slice(0, value.length - 1);
    } else {
      setFormData({
        ...formData,
        [e.target.name]: [value.split(',').map((num) => Number.parseInt(num))],
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

  useEffect(() => {}, [formData, formErrors]);

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
    else setIsSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting) {
      createPost(`${API_URL}/api/customer`, formData)
        .then(history.push('/'))
        .catch(() => {
          setSubmissionError(true);
          setIsSubmitting(false);
        });
    }
  }, [isSubmitting, formData, history]);

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
      <PageContentContainer className="w-11/12 md:w-1/2 max-w-lg p-4 my-10">
        <h2 className="mb-8 font-bold text-3xl">Create an account</h2>
        <Form id="signup" onSubmit={handleSubmit}>
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
              fullWidth
              required
              showError={formErrors.email}
            />
          </Row>
          <Row>
            <Input
              name="password"
              label="Password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              required
              showError={formErrors.password}
            />
          </Row>
          <Row>
            <Input
              name="phoneNumbers"
              label="Phone Numbers"
              type="text"
              onChange={handlePhoneNumbersChange}
              onBlur={handleBlur}
              optional
              fullWidth
            />
          </Row>
          <Row>
            <Submit form="signup" isSubmitting={isSubmitting}>
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
};
