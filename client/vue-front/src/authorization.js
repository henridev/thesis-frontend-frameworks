import axios from "axios";

const service = axios.create({
  baseURL: `/api/authorization`,
  withCredentials: true
});

const errHandler = err => {
  console.error(err);
  if (err.response && err.response.data) {
    console.error("API response", err.response.data);
    throw err.response.data.message;
  }
  throw err;
};

export default {
  service: service,
  login(email, password) {
    return service
      .post(`/login`, { email, password })
      .then(res => res.data.user)
      .catch(errHandler);
  },

  signup(name, email, password) {
    return service
      .post(`/signup`, { name, email, password })
      .then(res => res.data.user)
      .catch(errHandler);
  }
};
