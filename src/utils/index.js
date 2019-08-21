import axios from 'axios';
import jwt from 'jsonwebtoken'

export const axiosRequest = async ({ path, payload, method }) => {
  const baseURL = 'https://epic-mail-global.herokuapp.com';
  const url = `${baseURL}${path}`;
  const token = localStorage.getItem('token');
  console.log('this is the token', token);
  const axiosdata = {
    method,
    url,
    data: payload,
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json',
    },
    json: true,
  };
  const result = await axios(axiosdata);

  const data = result && result.data;
  return data;
};

export const populateLocalStorage = (userData) => {
  if (userData) {
    const { token } = userData;
    // verify token
    jwt.verify(token, 'secretKey', (err, payload) => {
      if (err) {
          return console.log('ERROR: ', err);
      }
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(payload));
    });
  }
};

export const emptyLocalStorage = () => {
  localStorage.clear();
};
