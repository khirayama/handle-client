import request from 'axios';


export class TaskResource {
  constructor(options) {
    this.defaults = {
      text: '',
      completed: false,
      categoryId: null,
      order: null,
    };
    this._data = [];
  }
  fetch() {
    return new Promise((resolve) => {
      request.get('/api/v1/tasks', { withCredentials: true }).then((res) => {
        resolve(res);
      });
    });
  }
  create(entity) {
    return new Promise((resolve) => {
      request.post('/api/v1/tasks', entity, { withCredentials: true }).then((res) => {
        resolve(res);
      });
    });
  }
  update(id, entity) {
    return new Promise((resolve) => {
      request.put(`/api/v1/tasks/${ id }`, entity, { withCredentials: true }).then((res) => {
        resolve(res);
      });
    });
  }
  destroy(id) {
    return new Promise((resolve) => {
      request.delete(`/api/v1/tasks/${ id }`, { withCredentials: true }).then((res) => {
        resolve(res);
      });
    });
  }
  find(id) {
    return new Promise((resolve) => {
      request.get(`/api/v1/tasks/${ id }`, { withCredentials: true }).then((res) => {
        resolve(res);
      });
    });
  }
  reorder(orders) {
    return new Promise((resolve) => {
      request.put('/api/v1/tasks', orders, { withCredentials: true }).then((res) => {
        resolve(res);
      });
    });
  }
  move(orders) {
    return new Promise((resolve) => {
      request.put('/api/v1/move_tasks', orders, { withCredentials: true }).then((res) => {
        resolve(res);
      });
    });
  }
}
export default new TaskResource();
