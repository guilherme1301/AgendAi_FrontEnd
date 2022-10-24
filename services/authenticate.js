import AbstractApiService from './abstractApiService';

export default class AuthenticateService extends AbstractApiService{
  static basepath = `/auth`;


  static async login(data) {
    const response = await this.fetch(`${this.basepath}/login`, {
      method: "POST",
      body: JSON.stringify(data)
    });
    return response;
  }
  
  static async getUserData(token) {
    const response = await this.fetch(`${this.basepath}/getuser/${token}`);
    return response;
  }
  
  static async clientRegister(data) {
    const response = await this.fetch(`${this.basepath}/userClient/create`, {
      method: "POST",
      body: JSON.stringify(data)
    });
    return response;
  }
  
  static async shopRegister(data) {
    const response = await this.fetch(`${this.basepath}/userShop/create`, {
      method: "POST",
      body: JSON.stringify(data)
    });
    return response;
  }

  static async logout(data) {
    const response = await this.fetch(`${this.basepath}/logout`, {
      method: "POST",
      body: JSON.stringify(data)
    });
    return response;
  }

  static getWebSocketURL(){
    return this.base;
  }

}
