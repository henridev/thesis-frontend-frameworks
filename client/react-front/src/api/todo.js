import axios from "axios";

console.log(process.env.NODE_ENV);

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api/auth"
      : `http://${window.location.hostname}:5000/api/todo`,
  withCredentials: true,
});

const errHandler = (err) => {
  console.error(err);
  if (err.response && err.response.data) {
    console.error("API response", err.response.data);
    throw err.response.data.message;
  }
  throw err;
};

export default {
  service: service,
  create() {
    service.post();
  },

  read() {
    service.get();
  },

  update() {
    service.put();
  },

  delete() {
    service.delete();
  },
};
