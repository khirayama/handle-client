import request from 'axios';


const uid = function() {
  const now = new Date();
  return (+now + Math.floor(Math.random() * 999999)).toString(36);
};


export class TaskCategoryResource {
  constructor() {
    this.defaults = {
      name: '',
      order: null,
    };
  }
  fetch() {
    return new Promise((resolve) => {
      request.get('/api/v1/task_categories', { withCredentials: true }).then((res) => {
        resolve(res);
      });
    });
  }
  find(id) {
    return new Promise((resolve) => {
      request.get(`/api/v1/task_categories/${ id }`, { withCredentials: true }).then((res) => {
        resolve(res);
      });
    });
  }
  create(entity) {
    return new Promise((resolve) => {
      request.post('/api/v1/task_categories', entity, { withCredentials: true }).then((res) => {
        resolve(res);
      });
    });
  }
  update(id, entity) {
    return new Promise((resolve) => {
      request.put(`/api/v1/task_categories/${ id }`, entity, { withCredentials: true }).then((res) => {
        resolve(res);
      });
    });
  }
  destroy(id) {
    return new Promise((resolve) => {
      request.delete(`/api/v1/task_categories/${ id }`, { withCredentials: true }).then((res) => {
        resolve(res);
      });
    });
  }
  reorder(orders) {
    return new Promise((resolve) => {
      request.put('/api/v1/task_categories', orders, { withCredentials: true }).then((res) => {
        resolve(res);
      });
    });
  }
}
export default new TaskCategoryResource();
