import http from '../http-common';
class PostData {
  getAll() {
    return http.get('/todos');
  }
  get(id: string) {
    return http.get(`/todos/${id}`);
  }
}
export default new PostData();