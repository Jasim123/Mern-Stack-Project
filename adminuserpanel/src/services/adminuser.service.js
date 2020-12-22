import http from "../http-common";

class AdminUserDataService {

  getAllUsers() {
    return http.get("/");
  }

  login (data){
      return http.post("/login", data);
  }

  getUserById(data){
      return http.post('getuserDetails', data);
      
  }

  saveUser(data){
      return http.post('/create-user-info', data);
  }
}

export default new AdminUserDataService();