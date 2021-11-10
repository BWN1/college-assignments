export const MEDIA_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1440,
};

export const WEBSITE_URL = 'https://web422-bneumann.herokuapp.com';

export const formErrorMessages = {
  signup: {
    fname: 'This field is required',
    lname: 'This field is required',
    email: 'Please enter a valid email',
    password: 'Please enter a password',
  },
};

export const emailRegEx = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
