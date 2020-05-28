import axios from "axios";

const service = axios.create({
  baseURL: `/api/todo`,
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
  create(title, completed) {
    return service
      .post(`/`, { title, completed })
      .then(res => res.data.todo)
      .catch(errHandler);
  },

  read(_id) {
    return service
      .get(`/${_id}`)
      .then(res => res.data)
      .catch(errHandler);
  },

  update(_id, status = "", title = "") {
    return service
      .put(`/${_id}`, { status, title })
      .then(res => res.data)
      .catch(errHandler);
  },

  delete(_id) {
    return service
      .delete(`/${_id}`)
      .then(res => res.data)
      .catch(errHandler);
  },

  getAll() {
    return service
      .get("/all")
      .then(res => res.data)
      .catch(errHandler);
  }
};
