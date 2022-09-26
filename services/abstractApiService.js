import Enviroment from '../entities/environment';
import ApiNotOk from '../entities/errors/apiNotOk';
import ApiError from '../entities/errors/apiError';
import {getTokenSync, emmitLogout} from '../hooks/useAuthenticate';

export default class AbstractApiService {
  static base = `${Enviroment.get()}`;


  static async fetch(url, params={}) {
    const response = await fetch(`${this.base}${url}`, {
      ...params,
      headers: {
        ...params.headers,
        'Content-Type': "application/json",
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': "*",
        'x-access-token': getTokenSync()
      },
    });

    if(!response.ok){
      if(response.statusText == 'Unauthorized'){
        emmitLogout();
        ApiError.throwError("Unauthorized", false);
      }
      return
      // ApiError.throwError(result.message, false);
    }

    const result = await response.json();

    if(result.error){
      if(result.message.includes('AUTH0002')){
        emmitLogout();
      }
      ApiError.throwError(result.message, false);
    }
    return result;
  }

}
