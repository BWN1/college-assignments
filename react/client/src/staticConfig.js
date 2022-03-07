export const MEDIA_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1440,
};

export const API_URL = 'https://web422-bneumann.herokuapp.com';
export const API_PATHS = {
  products: '/api/products/',
  categories: '/api/categories/',
  bestSellers: '/api/best-sellers/',
  customer: '/api/customer/',
};

export const formErrorMessages = {
  signup: {
    fname: 'This field is required',
    lname: 'This field is required',
    email: 'Please enter a valid email',
    password: 'Password must be at least 6 characters',
    phoneNumber: 'Phone number must be at least 10 numbers',
  },
};

export const emailRegEx = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export const notificationText = {
  registration: {
    error: 'There was an error when registering. Please try again later',
    success: 'You were successfully registered!',
  },
};
