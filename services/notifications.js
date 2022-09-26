import AbstractApiService from './abstractApiService';
import { getTokenSync } from '../hooks/useAuthenticate';

const userToken = getTokenSync();

export default class NotificationService extends AbstractApiService{
  static basepath = `/notification`;

  static async sendEmail(data) {
    const response = await this.fetch(`${this.basepath}/email`, {
      method: "POST",
      body: JSON.stringify(data)
    });
    return response;
  }
  
  static async sendSocket(data) {
    const response = await this.fetch(`${this.basepath}/socket`, {
      method: "POST",
      body: JSON.stringify(data)
    });
    return response;
  }
}
