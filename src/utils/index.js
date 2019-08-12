import axios from 'axios';
import jwt from 'jsonwebtoken'

export const axiosRequest = async ({ url, payload, method }) => {
  const baseURL = 'https://epic-mail-global.herokuapp.com';
  console.log('app url', baseURL);
  const server = `${baseURL}${url}`;
  const result = await axios[method](server, payload);
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
