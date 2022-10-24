import AbstractApiService from '../abstractApiService';

export default class ServicesService extends AbstractApiService{
  static basepath = `/services`;


  static async list(filter, page=0, countPerPage=10, orderBy={}) {

    const response = await this.fetch(`${this.basepath}`);
    // /list?filter=${filter||""}&page=${page}&countPerPage=${countPerPage}&orderBy=${JSON.stringify(orderBy)}`);
    return response;
  }

  static async findById(id) {
    const response = await this.fetch(`${this.basepath}/${id}`);
    return response;
  }

  static async save(data) {

    const response = await this.fetch(`${this.basepath}`,{
      method: "POST",
      body: JSON.stringify(data)
    });
    return response;
  }

  static async remove(id) {

    const response = await this.fetch(`${this.basepath}/delete/${id}`,{
      method: "GET"
    });
    return response;
  }

}
